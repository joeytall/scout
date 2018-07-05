var Button = (() => {
  var pub = {},
      pvt = {};

  pub.init = () => {
    $('#search').kendoButton({
      icon: 'search',
      click: () => {
        var asin = $('#input').val()
            filter = [];
        if (!asin)
          filter = [];
        else if (AutoComplete.data.includes(asin))
          filter = {
            field: 'asin',
            operator: 'eq',
            value: asin,
          };
        else
          pvt.scrape(asin);
        Grid.filter(filter);
      }
    });
  };

  pvt.scrape = (asin) => {
    Product.show();
    $.getJSON('/scrape?asin=' + asin, (r) => {
      if (r.error)
        Product.showError(asin, r.error);
      else
        Product.update(r.data);
    });
  };

  return pub;
})();
