import requests
from pyquery import PyQuery as pq
from scout.dbapi import SQL


class Scraper(object):
  def __init__(self, ASIN):
    self._init_data(ASIN)
    try:
      self._init_doc(ASIN)
      self._query()
      self._add_to_db()
    except Exception as e:
      self.error = str(e)

  def _init_data(self, ASIN):
    self.error = ''
    self.data = {
      'asin': ASIN,
      'category': '',
      'rank': '',
      'size': '',
      'weight': '',
    }

  def _init_doc(self, ASIN):
    url = 'https://www.amazon.com/dp/' + ASIN
    headers = { 'User-Agent': '', }
    response = requests.get(url, headers=headers)
    if not response.ok:
      raise Exception('Page Error: ' + str(response.status_code))
    self.doc = pq(response.content)

  def _query(self):
    self.data['category'] = self.doc('.searchSelect :selected').text()
    try:
      self._get_rank()
      self._get_dimensions()
    except:
      pass

  def _get_rank(self):
    if self.doc('#SalesRank .value'):
      rank = self.doc('#SalesRank .value').text().split(' ')[0][1:]
    else:
      rank = self.doc('#SalesRank').text().split(': ')[1].split(' ')[0][1:]

    self.data['rank'] = int(rank.replace(',',  ''))

  def _get_dimensions(self):
    if self.doc('.size-weight .value'):
      self.data['weight'], self.data['size'] = [td.text for td in self.doc('.size-weight .value')]
    else:
      for li in self.doc('.content li').items():
        text = li.text()
        if 'Dimensions' in text:
          self.data['size'], self.data['weight'] = text.split(':')[1].split(';')
          return

  def _add_to_db(self):
    SQL().insert(self.data)

  def get(self):
    return {
      'data': self.data,
      'error': self.error,
    }
