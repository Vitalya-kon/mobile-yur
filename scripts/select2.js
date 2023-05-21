  //  select 2

  $(document).ready(function() {
    $('.filter__select_consultant').select2({
      placeholder: "Поиск по консультанту",
      allowClear: true,
      language:'ru'
    });
    $('.filter__select_source').select2({
      placeholder: "Поиск по источнику",
      allowClear: true,
      language:'ru'
    });
    $('.filter__select_id').select2({
      placeholder: "Поиск по ID",
      allowClear: true,
      language:'ru'
    });
  });