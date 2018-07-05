from scout.dbapi import SQL


class Query(object):
  def __init__(self):
    return

  def get(self):
    rows = SQL().query()
    data = []
    for r in rows:
      data.append({
        'asin': r[0],
        'link': 'https://www.amazon.com/dp/' + r[0],
        'category': r[1],
        'rank': r[2],
        'size': r[3],
        'weight': r[4],
      })

    return data


