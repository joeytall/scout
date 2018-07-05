import os, sqlite3
DB = "data.db"


class SQL(object):
  def __init__(self):
    self._init_db()

  def _init_db(self):
    db_exists = os.path.exists(DB)
    self.con = sqlite3.connect(DB)
    self.cur = self.con.cursor()
    if not db_exists:
      self.cur.execute("CREATE TABLE product (asin, category, rank, size, weight);")

  def insert(self, d):
    self.cur.execute("INSERT INTO product (asin, category, rank, size, weight) VALUES (?, ?, ?, ?, ?);", (d['asin'], d['category'], d['rank'], d['size'], d['weight']))
    self._cleanup()

  def query(self):
    self.cur.execute("SELECT * from product")
    data = [r for r in self.cur.fetchall()]
    self._cleanup()
    return data

  def _cleanup(self):
    self.con.commit()
    self.con.close()
