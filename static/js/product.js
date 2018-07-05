var Product = new Vue({
  el: '#window',
  delimiters: ['{[', ']}'],
  data: {
    loading: true,
    error: '',
    p: {},
  },
  methods: {
    show () {
      let w = $('#window').kendoWindow({
        width: '400px',
        height: '300px',
        title: 'Searching...',
        visible: true,
        actions: [ 'close' ],
        close: () => {
          Grid.rebind();
        }
      }).data('kendoWindow');
      w.center().open();
      kendo.ui.progress(w.element, true);
      this.loading = true;
    },
    update(p) {
      this.error = '',
      this.p = p;
      this.loading = false;
      let w = $('#window').data('kendoWindow');
      kendo.ui.progress(w.element, false);
      w.title('Product Found: ' + p.asin);
    },
    showError(asin, e){
      let w = $('#window').data('kendoWindow');
      kendo.ui.progress(w.element, false);
      w.title('Product Not Found: ' + asin);
      this.error = e;
    },
    detail(e){
      e.preventDefault();
      var dataItem = $('#grid').data('kendoGrid').dataItem($(e.currentTarget).closest("tr"));
      this.show();
      this.update(dataItem);
    }
  },
});
