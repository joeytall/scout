var AutoComplete = (() => {
  var pub = {},
      pvt = {};

  pub.init = () => {
    $("#input").kendoAutoComplete({
      change: (e) => {
        Grid.asin = e.sender.value();
      }
    });
  };

  pub.setData = (data) => {
    pub.data = data.map( ({asin}) => asin);
    $('#input').data('kendoAutoComplete').setDataSource(
      new kendo.data.DataSource({
        data: pub.data,
      })
    );
  };

  return pub;
})();
