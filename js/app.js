$(document).ready(function() {


  const kor1 = ["Амелотекс", "Дифлюкан 2 шт", "Зовиракс 5 флаконов", "Лидокаин спрей", "Макмирор", "Мидокалм 150мг 2 шт", "Микролакс", "Млекоин", "Найз табл", "Но-шпа внутривенно", "Но-шпа таблетки", "Нурофен экспресс", "Нурофен сироп детский", "Отофа", "Парацетомол", "Реаферон-Липинт", "Burn free (спрей от ожогов)", "Hydrocortison 2,5%", "Пластырь детский", "Терафлю", "Зостерин-ультра 30%", "Ринофлуимуцил", "Тантум-Верде спрей", "Доктор мои сосалки от кашля", "Отикапс", "Цитрамон"]

  const kor2 = ["Панатус форте", "Таваник", "Тева мазь", "Феррум Лек", "Эмла", "Новалгин", "Нимесил", "Налгезин", "Креон", "Банки под анализы 3 шт", "Тонзилгон", "Нурофен крем", "Троксевазин", "Називин детский", "Презики 5 шт", "Имудон 1 таблетка", "Бинты", "Ацикловир", "Бепантен", "Граммидин 1 табл", "Калгель", "Аугументин 1000 (7 табл)", "Баксет беби 3 пакетика" ]

  const kor3 = ["Регидрон", "Самоклеящийся бинт", "Пластырь", "Рулон ваты", "Фламин 4 пакетика", "Шприц с иглой 2 мл", "Кетонал свечи", "Йод", "Зеленка", "Ихтиол мазь", "Виброцил", "Римантадин", "Темпалгин", "Клотримазол", "Гиоксизон", "Цинковая паста", "Спиртовая салфетка", "Градусник 2 шт", "Маски медицинские", "Корнерегель", "Вигамокс", "Банеоцин мазь", "Борная кислота", "Пиносол", "Каптоприл", "Касторовое масло", "Амбробене раствор", "Веррукацид", "Кетонал", "Мастодинон", "Левомикон-ТФФ", "Пипетка большая", "Эспумизан" ]

  const kor4 = ["Амоксиклав", "Солкосерил", "Зодак", "Банеоцин (порошек)", "Энтерофурил 200", "Фосфалюгель", "Хофитол", "Смекта", "Энтерол", "Фурацилин", "Цетрин", "Нафтизин", "Пивные дрожжи" ]




  const search = function (name) {
     if (kor1.includes(name)) {
         return 'Коробка 1'
     } else if (kor2.includes(name)) {
         return 'Коробка 2'
     } else if(kor3.includes(name)) {
         return 'Коробка 3'
     } else if(kor4.includes(name)) {
         return 'Коробка 4'
     }
  }




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

        var $new_comment = search(bigBukwa(ubrProb(comment_text)));

        $(".output_area p").remove();

        $(".output_area").append("<p>" + $new_comment + "</p>");

        $(".output_area").fadeIn();

        $(".input_s").val("");

        $(".output_area").hide(4000);

      }

    }

  });


// Функционал вставки из json содержимого ящиков в контейнер html


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

    var $content12 = $("<p>");
    $content12.html(item.kor4.sort().join('<br/>'));
    $("#picframe12").append($content12);

    var $content4 = $("<p>");
    $content4.html(item.ant1_razn.sort().join('<br/>'));
    $("#picframe1").append($content4);

    var $content5 = $("<p>");
    $content5.html(item.ant2_doc.sort().join('<br/>'));
    $("#picframe2").append($content5);

    var $content2_1 = $("<li>");
    $content2_1.html(item.ant2_1_doc.sort().join('<li>'));
    $("#picframe2_1").append($content2_1);

    var $content6 = $("<p>");
    $content6.html(item.ant3_farm.sort().join('<br/>'));
    $("#picframe3").append($content6);

    var $content7 = $("<p>");
    $content7.html(item.ant4_hos.sort().join('<br/>'));
    $("#picframe4").append($content7);

    var $content4_1 = $("<li>");
    $content4_1.html(item.ant4_1_hos.sort().join('<li>'));
    $("#picframe4_1").append($content4_1);

    var $content4_2 = $("<li>");
    $content4_2.html(item.ant4_2_hos.sort().join('<li>'));
    $("#picframe4_2").append($content4_2);

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


  });





// Функционал раскрытия контейнеров (аккардион)


  $("#clickMe1").click(function() {
    $("#picframe1").slideToggle();
  });

  $("#clickMe2").click(function() {
    $("#picframe2").slideToggle();
  });


  $("#clickMe2_1").click(function() {
    $("#picframe2_1").slideToggle();
  });


  $("#clickMe3").click(function() {
    $("#picframe3").slideToggle();
  });

  $("#clickMe4").click(function() {
    $("#picframe4").slideToggle();
  });

  $("#clickMe4_1").click(function() {
    $("#picframe4_1").slideToggle();
  });

  $("#clickMe4_2").click(function() {
    $("#picframe4_2").slideToggle();
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

  $("#clickMe8_1").click(function() {
    $("#picframe8_1").slideToggle();
  });

  $("#clickMe8_2").click(function() {
    $("#picframe8_2").slideToggle();
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
