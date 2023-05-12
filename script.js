
    // текущее время в header
    var today = new Date();
   
    const fullDate = new Intl.DateTimeFormat("ru", {dateStyle: "full"}).format(today)
    panelData.innerText = fullDate;
    const shortTime = new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(today);
    panelClock.innerText = shortTime;

    // =========
    //  Анимация выпадающего списка
      // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropup').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropup').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
    // =============
    // смена иконки в нижнем меню
    
   
    // ====================
    //<!-- =====  administrator.companies.script ===== -->
//     let searchParams = window.location.search;
// var search = searchParams.substring(searchParams.indexOf('=')+1);
// //console.log(searchParams);
// //console.log(search);

// funcompanies(search)
// function SaveChangeIdCompanies(id){

// var dataform = $( "#formIdCompanies" ).serialize();
// //console.log(dataform);
// /**/
// $.post(document.location.href, {action: 'SaveChangeIdCompanies', id:id, dataform:dataform}, function(data) {
//      console.log(data);
//     var data = JSON.parse(data);
//     if(data['result'] == 'error') toastr.error('<b>Ошибка при сохранении!<br>Все поля обязательны для заполнения</b>');
//         else {toastr.success('<b>Изменения сохранены!</b>');
//          // Запрос данных в таблицу у сниппета
//          var search = data['pagetitle_alias'];
//          location.search = 'mnc=' + search;
//         //funcompanies(search)
// }
// })
// /**/        
// }



// function funcompanies(search) {
//   $('.preloader').show(); 
// //toastr.success('<b>Загрузка завершена!</b>');

//     $.post(document.location.href, {action: 'funcompanies',search:search}, function(data) {
//     $('.preloader').show(); 
//     /**/
//     var data = JSON.parse(data);
//     //console.log(data);
//     //console.log(data['my_arr']);
//     /**/
//     var heading = document.getElementById('mnc_heading');
//     var tbody = document.getElementById('mnc_tbody');	
//     //var ttotal = document.getElementById('idtotal');
//     function removeChildren(elem) {
//       try {
//         elem.innerHTML = '';
//       } catch(e) {
//         while(elem.firstChild) {
//           elem.firstChild.remove();
//         }
//       }
//     }
//     removeChildren(heading);
//     removeChildren(tbody);
    
//     //removeChildren(ttotal);
//     heading.insertAdjacentHTML('afterBegin', data['heading']);
//     tbody.insertAdjacentHTML('afterBegin', data['tbody']);
    
//     //ttotal.insertAdjacentHTML('afterBegin', data['ttotal']);
//       /**/
// }).success(function() {$('.preloader').hide();})

// /**/
         
// }
// /*########################################*/
// $(document).on("click", ".editcompanies", function (e) { 
//                 e.preventDefault();
//                 var name = $(this).data('name');
//                 console.log('name - '+name);
//                     $('.preloader').show(); 
//     if(name!='exit'){
//                 $.post(document.location.href, {action: 'funeditcompanies',name:name}, function(data) {
//     $('.preloader').show(); 
//     /**/
//     var data = JSON.parse(data);
//     //console.log(data);
//     //console.log(data['my_arr']);
//     /**/
//     var heading = document.getElementById('mnc_heading');
//     var tbody = document.getElementById('mnc_tbody');	
//     //var ttotal = document.getElementById('idtotal');
//     function removeChildren(elem) {
//       try {
//         elem.innerHTML = '';
//       } catch(e) {
//         while(elem.firstChild) {
//           elem.firstChild.remove();
//         }
//       }
//     }
//     removeChildren(heading);
//     removeChildren(tbody);
    
//     //removeChildren(ttotal);
//     heading.insertAdjacentHTML('afterBegin', data['heading']);
//     tbody.insertAdjacentHTML('afterBegin', data['tbody']);
    
//     //ttotal.insertAdjacentHTML('afterBegin', data['ttotal']);
//       /**/

//     //$('.preloader').hide(); 
// }).success(function() {$('.preloader').hide();})
//     }else{
//      funcompanies(search)   
//     }
                
//             });
// /*########################################*/	