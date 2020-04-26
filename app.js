$(document).ready(function() {



  const findFarm = (farm) => {

    if (farm === 'Амелотекс' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю' || farm === 'Пластырь детский' || farm === 'Пластырь детский' || farm === 'Зостерин-ультра' || farm === 'Ринофлуимуцил' || farm === 'Тантум-Верде спрей' || farm === 'Доктор мом' || farm === 'Цитрамон' || farm === 'Отикапс') {
      return 'Коробка 1';
    }


    if (farm === 'Панатус форте' || farm === 'Таваник' || farm === 'Тева мазь' || farm === 'Феррум Лек' || farm === 'Фурацилин' || farm === 'Эмла' || farm === 'Энтерол' || farm === 'Новалгин' || farm === 'Нимесил' || farm === 'Налгезин' || farm === 'Креон' || farm === 'Пивные дрожжи' || farm === 'Банки под анализы' || farm === 'Тонзилгон' || farm === 'Нурофен крем' || farm === 'Троксевазин' || farm === 'Називин детский' || farm === 'Найз крем' || farm === 'Перекись' || farm === 'Жидкий пластырь' || farm === 'Эспумизан детский' || farm === 'Презервативы' || farm === 'Имудон' || farm === 'Бинты' || farm === 'Ацикловир' || farm === 'Бепантен' || farm === 'Граммидин' || farm === 'Калгель' || farm === 'Аугументин' || farm === 'Цетрин' || farm === 'Баксет беби' || farm === 'Нафтизин раствор') {
      return 'Коробка 2';
    }


    if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт' || farm === 'Пластырь' || farm === 'Рулон ваты' || farm === 'Фламин' || farm === 'Шпритц' || farm === 'Кетонал свечи' || farm === 'Йод' || farm === 'Зеленка' || farm === 'Ихтиол мазь' || farm === 'Виброцил' || farm === 'Римантадин' || farm === 'Темпалгин' || farm === 'Клотримазол' || farm === 'Гиоксизон' || farm === 'Цинковая паста' || farm === 'Энтерофурил' || farm === 'Спиртовая салфетка' || farm === 'Градусник' || farm === 'Маски медицинские' || farm === 'Корнерегель' || farm === 'Вигамокс' || farm === 'Банеоцин мазь' || farm === 'Борная кислота' || farm === 'Пиносол' || farm === 'Каптоприл' || farm === 'Касторовое масло' || farm === 'Амбробене раствор' || farm === 'Веррукацид' || farm === 'Хофитол таблетки' || farm === 'Гиоксизон' || farm === 'Кетонал' || farm === 'Мастодинон' || farm === 'Левомикон-ТФФ' || farm === 'Пипетка' || farm === 'Эспумизан' || farm === 'Смекта' || farm === 'Фосфалюгель') {
      return 'Коробка 3';
    } else {
      return 'Данного продукта нет'
    }

  };





  const bigBukwa = (str) => {

    if (str[0] === str[0].toUpperCase()) {

      return str;
    }

    if (str[0] !== str[0].toUpperCase()) {

      const newString = str[0];
      const newString2 = str[0].toUpperCase();
      const body = str.slice(1);
      const newString3 = newString2 + body;
      return newString3;

    }

  };




  const ubrProb = (str) => {

    const preobrText = str.trim();
    return preobrText;

  };



  $(".input_s").on("keypress", function(event) {

    var $new_comment;

    if (event.keyCode === 13) {

      if ($(".input_s").val() !== "") {


        comment_text = $(".input_s").val();

        var $new_comment = findFarm(bigBukwa(ubrProb(comment_text)));


        $(".output_area p").remove();

        $(".output_area").append("<p>" + $new_comment + "</p>");

        $(".output_area").fadeIn();

        $(".input_s").val("");

        $(".output_area").hide(4000);


      }

    }


  });






  // $(".img_s").on("click", function(event) {
  //
  //   var $new_comment;
  //
  //   if ($(".input_s").val() !== "") {
  //
  //
  //     comment_text = $(".input_s").val();
  //
  //     var $new_comment = findFarm(bigBukwa(ubrProb(comment_text)));
  //
  //
  //     $(".output_area p").remove();
  //
  //     $(".output_area").append("<p>" + $new_comment + "</p>");
  //
  //     $(".output_area").fadeIn();
  //
  //     $(".input_s").val("");
  //
  //     $(".output_area").hide(4000);
  //
  //
  //   }
  //
  // });







  $.getJSON("data.json", function(item) {


    var $content = $("<p>");
    $content.html(item.kor1.sort().join('<br/>'));
    $("#picframe9").append($content);

    var $content2 = $("<p>");
    $content2.html(item.kor2.sort().join('<br/>'));
    $("#picframe10").append($content2);

    var $content3 = $("<p>");
    $content3.html(item.kor3.sort().join('<br/>'));
    $("#picframe11").append($content3);

    var $content4 = $("<p>");
    $content4.html(item.ant1_razn.sort().join('<br/>'));
    $("#picframe1").append($content4);

    var $content5 = $("<p>");
    $content5.html(item.ant2_doc.sort().join('<br/>'));
    $("#picframe2").append($content5);

    var $content2_1 = $("<p>");
    $content2_1.html(item.ant2_1_doc.sort().join('<br/>'));
    $("#ul_dlt").append($content2_1);

    var $content6 = $("<p>");
    $content6.html(item.ant3_farm.sort().join('<br/>'));
    $("#picframe3").append($content6);

    var $content7 = $("<p>");
    $content7.html(item.ant4_hos.sort().join('<br/>'));
    $("#picframe4").append($content7);

    var $content4_1 = $("<li>");
    $content4_1.html(item.ant4_1_hos.sort().join('<li>'));
    $("#ul_kor_hos").append($content4_1);

    var $content4_2 = $("<li>");
    $content4_2.html(item.ant4_2_hos.sort().join('<li>'));
    $("#ul_meloch").append($content4_2);

    var $content8 = $("<p>");
    $content8.html(item.ant5_flowers.sort().join('<br/>'));
    $("#picframe5").append($content8);

    var $content9 = $("<p>");
    $content9.html(item.ant6_new_year.sort().join('<br/>'));
    $("#picframe6").append($content9);

    var $content10 = $("<p>");
    $content10.html(item.ant7_kitchen.sort().join('<br/>'));
    $("#picframe7").append($content10);

    var $content11 = $("<p>");
    $content11.html(item.ant8_child.sort().join('<br/>'));
    $("#picframe8").append($content11);

    var $content11_1 = $("<p>");
    $content11_1.html(item.ant8_1_child.sort().join('<br/>'));
    $("#ul_box_det").append($content11_1);

    var $content11_2 = $("<p>");
    $content11_2.html(item.ant8_2_child.sort().join('<br/>'));
    $("#ul_book_det").append($content11_2);


  });





// Функционал раскрытия контейнеров (аккардион)


  $("#clickMe1").click(function() {
    $("#picframe1").slideToggle();
  });

  $("#clickMe2").click(function() {
    $("#picframe2").slideToggle();
  });

  $("#clickMe3").click(function() {
    $("#picframe3").slideToggle();
  });

  $("#clickMe4").click(function() {
    $("#picframe4").slideToggle();
  });

  $("#clickMe4-1").click(function() {
    $("#picframe4-1").slideToggle();
  });

  $("#clickMe5").click(function() {
    $("#picframe5").slideToggle();
  });

  $("#clickMe6").click(function() {
    $("#picframe6").slideToggle();
  });

  $("#clickMe7").click(function() {
    $("#picframe7").slideToggle();
  });

  $("#clickMe8").click(function() {
    $("#picframe8").slideToggle();
  });

  $("#clickMe9").click(function() {
    $("#picframe9").slideToggle();
  });

  $("#clickMe10").click(function() {
    $("#picframe10").slideToggle();
  });

  $("#clickMe11").click(function() {
    $("#picframe11").slideToggle();
  });

  $("#clickMe12").click(function() {
    $("#picframe12").slideToggle();
  });







});
