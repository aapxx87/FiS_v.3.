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





  $(".input_s").on("keypress", function(event) {





    var $new_comment;

    if (event.keyCode === 13) {

      if ($(".input_s").val() !== "") {


        comment_text = $(".input_s").val();

        var $new_comment = findFarm(comment_text);


        $(".output_area p").remove();

        $(".output_area").append("<p>" + $new_comment + "</p>");

        $(".output_area").fadeIn();

        $(".input_s").val("");

        $(".output_area").hide(4000);


      }

    }

  });




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


});
