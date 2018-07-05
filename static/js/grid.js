var Grid = (() => {
  var pub = {},
      pvt = {};

  pub.init = () => {
    $("#grid").kendoGrid({
      dataSource: {
        transport: {
          read: "/query/",
          dataType: "json",
        },
        schema: {
          parse: (r) => {
            data = JSON.parse(r);
            AutoComplete.setData(data)
            return data;
          }
        },
        error: (e) => {
          console.log(e);
        },
        pageSize: 20,
      },
      height: $(window).height() - 40,
      scrollable: true,
      sortable: true,
      filterable: true,
      resizable: true,
      reorderable: true,
      pageable: {
        refresh: true,
        pageSizes: [20, 50, 100, 200],
      },
      dataBound: (e) => {
      },
      columns: [
        { command: {text: "View", click: Product.detail}, width: '150px'},
        { field: 'asin', title: "ASIN", template: '<a href="#=link#" target="_blank">#=asin#</a>'},
        { field: 'category', title: "Category"},
        { field: 'rank', title: "Rank"},
        { field: 'size', title: "Dimensions"},
        { field: 'weight', title: "Weight"},
      ]
    });
  };

  pub.rebind = () => {
    $('#grid').data('kendoGrid').dataSource.read();
  };

  pub.filter = (f) => {
    $('#grid').data('kendoGrid').dataSource.filter(f);
  };

  return pub;
})();
