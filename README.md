# Amazon Scout

# Requirements
Django 2.1 with Python3
`pip install requests pyquery`

## Install Live Reload (Optional)
`pip install django-livereload-server`
`python3 manager.py livereload`

## Start up server
`python3 manager.py runserver`

## Usage

![picture alt](https://github.com/joeytall/fortinetRemote/blob/master/fortinet/static/page.png)

You should see this at  `http://127.0.0.1:8000/`

## AutoComplete

![picture alt](https://github.com/joeytall/fortinetRemote/blob/master/fortinet/static/page.png)

## Detail

![picture alt](https://github.com/joeytall/fortinetRemote/blob/master/fortinet/static/page.png)

# Featurse
1. Web Scrape Amazon product info if product not found in db.
2. Newly searched products will be added to DB automatically.
3. Table supports paging, sorting, filtering, column resizing/reordering.
4. Quick Link on ASIN opens up a new tab with amazon product page.
5. Existing product can be viewed in popup.
6. Autocomplete is enabled when user types in the search input box.
7. Product will be filtered if already exist in DB instead of web scraping.
