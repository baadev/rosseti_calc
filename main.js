// Данные для генерации таблицы
const data = JSON.parse(
  '{"table":{"Свет":[{"Приглушение света":[{"Сколько точек света необходимо приглушать? Точка света - это выключатель, а не отдельная лампочка.":{"INT":"FIB_FGD-212"}}]},{"Включение/выключение":[{"Сколько точек света необходимо включать/выключать? Точка света - это выключатель, а не отдельная лампочка.":{"INT":"PHI_PAN04"}}]},{"Включение при движении":[{"Сколько зон, где необходимо отслеживание движения?":{"INT":"PHI_PSP05-A"}}]}],"Климат":[{"Батареи":[{"Сколько батарей необходимо регулировать?":{"INT":"FIB_FGT-START"}}]},{"Эллектрические теплые полы":[{"Сколько зон эллектрического теплого пола необходимо регулировать?":{"INT":"HEA_5430499"}}]}],"Безопасность":[{"От пожара":[{"Сколько пожароопасных зон необходимо контролировать?":{"INT":"PHI_PSG01"}},{"Рекомендуем установить устройство защиты от искрения в электрический щит. Это значительно снизит вероятность возгорания. Выберите максимальный ток в вашем доме.":{"ENUM":{"16A":"УЗИс-С1-16-010110-ЭЛ002","25A":"УЗИс-С1-25-010110-ЭЛ002","32A":"УЗИс-С1-32-010110-ЭЛ002","45A":"УЗИс-С1-25-010110-ЭЛ002","63A":"УЗИс-С1-63-010110-ЭЛ002"}}}]},{"От протечки":[{"По скольким трубам вода поступает в дом?":{"INT":"ZMR_GR-105"}},{"Сколько мокрых зон в доме (кухня, ванная, ...)?":{"INT":"FIB_FGFS-101"}}]}],"Управление":[{"Контроллер Z-Wave.Me Hub":[{"Управление системой Умного Дома.":{"BOOLEAN":"ZMR_HUB1-B"}}]},{"Голосовое управление":[{"Укажите количество комнат, где планируете разместить умную колонку":{"INT":"YNDX-0001B"}}]}]}}'
); 
// Данные для вычислений
const productData = JSON.parse(
  '{"FIB_FGT-START":{"name":"Радиаторный термостат FIBARO Heat Controller с внешним датчиком температуры","cost":7989,"url":"https://rus.z-wave.me/shop/radiatornyy-termostat-fibaro-heat-controller-s-datchikom"},"EUR_SPIRIT":{"name":"Терморегулятор Eurotronic Spirit","cost":5080,"url":"https://rus.z-wave.me/shop/termoregulyator-eurotronic-spirit"},"HEA_5430499":{"name":"Термостат теплого пола Heatit (белый)","cost":11900,"url":"https://rus.z-wave.me/shop/termostat-teplogo-pola-heatit"},"HEA_5430498":{"name":"Термостат теплого пола Heatit (черный)","cost":11900,"url":"https://rus.z-wave.me/shop/termostat-teplogo-pola-heatit"},"GOA_ZMNHID4":{"name":"Встраиваемый модуль-термостат с сенсором для эл.оборгевательных устройств Qubino On/Off Thermostat","cost":5920,"url":"https://rus.z-wave.me/shop/vstraivaemyy-modul-termostat-s-sensorom-dlya-eloborgevatelnykh-ustroystv-qubino-onoff-thermostat"},"SEC_SRT321":{"name":"Настенный комнатный термостат SRT 321","cost":7530,"url":"https://rus.z-wave.me/shop/secure-wall-thermostat-with-lcd-display"},"DAN_HC10":{"name":"Блок управления термоэлектрическими приводами Danfoss на 10 каналов","cost":32540,"url":"https://rus.z-wave.me/shop/blok-upravleniya-termoelektricheskimi-privodami-danfoss-na-10-kanalov"},"DAN_HC5":{"name":"Блок управления термоэлектрическими приводами Danfoss на 5 каналов","cost":27450,"url":"https://rus.z-wave.me/shop/blok-upravleniya-termoelektricheskimi-privodami-danfoss-na-5-kanalov"},"PHI_PAR01":{"name":"Устройство управления кондиционерами Philio","cost":6490,"url":"https://rus.z-wave.me/shop/ustroystvo-upravleniya-konditsionerami-philio-par01"},"PHI_PAN03":{"name":"Встраиваемое одинарное реле Philio с энергоизмерением","cost":4060,"url":"https://rus.z-wave.me/shop/philio-odnokanalnoe-rele-s-energoizmereniem"},"PHI_PAN04":{"name":"Встраиваемое двойное реле Philio с энергоизмерением","cost":4060,"url":"https://rus.z-wave.me/shop/philio-dvukhkanalnoe-rele-s-energoizmereniem"},"PHI_PSP05-A":{"name":"Датчик движения Philio для крепления на поверхность","cost":4360,"url":"https://rus.z-wave.me/shop/philio-datchik-dvizheniya-2-zony"},"PHI_PST02-B":{"name":"Датчик движения Philio 3 в 1","cost":4220,"url":"https://rus.z-wave.me/shop/multisensor-philio-3-v-1"},"FIB_FGRGB-101":{"name":"Модуль управления светодиодными лентами FIBARO RGBW Controller","cost":5479,"url":"https://rus.z-wave.me/shop/fibaro-rgbw"},"FIB_FGD-212":{"name":"Встраиваемый диммер FIBARO Dimmer 2","cost":5479,"url":"https://rus.z-wave.me/shop/fibaro-dimmer-2"},"PHI_PAB01":{"name":"Клещи токоизмерительные Philio","cost":5490,"url":"https://rus.z-wave.me/shop/tokoizmeritelnye-kleshchi-philio"},"FIB_FGSD-002":{"name":"Датчик дыма FIBARO Smoke Sensor","cost":5769,"url":"https://rus.z-wave.me/shop/fibaro-smoke-detector"},"PHI_PSG01":{"name":"Датчик дыма Philio","cost":4770,"url":"https://rus.z-wave.me/shop/datchik-dyma-philio"},"PHI_PSE02-B":{"name":"Сирена с визуальным и звуковым оповещением Philio","cost":4990,"url":"https://rus.z-wave.me/shop/sirena-s-vizualnym-i-zvukovym-opoveshcheniem-philio"},"PHI_PST02-C":{"name":"Датчик открытия двери/окна 3 в 1 Philio","cost":3660,"url":"https://rus.z-wave.me/shop/datchik-otkrytiya-philio-3-v-1"},"PHI_PST02-A":{"name":"Мультисенсор Philio MultiSensor 4 в 1","cost":4390,"url":"https://rus.z-wave.me/shop/multisensor-filio-4-in-1"},"FIB_FGFS-101":{"name":"Датчик протечки и температуры FIBARO Flood Sensor","cost":5329,"url":"https://rus.z-wave.me/shop/fibaro-flood-sensor"},"GID_WINNER_1/2_ZW_1/2_TIEMME_WSP3":{"name":"Комплект из 2х приводов Gidrolock (гор/хол), проводного датчика протечки и батареек.","cost":17300,"url":"http://gidrolock.ru/production/gidrolock-winner/"},"ZMR_GR-105":{"name":"Привод перекрытия воды Z-Wave.Me GR-105","cost":6490,"url":"https://rus.z-wave.me/shop/privod-perekrytiya-vody-z-waveme-gr-105"},"DAN_DANALOCK-V3-BTZE":{"name":"Замок Danalock V3 (Bluetooth + Z-Wave)","cost":16270,"url":"https://rus.z-wave.me/shop/danalock-v3"},"KAB_PXP_25x35":{"name":"Цилиндр замка Kaba для Danalock V3 (Цилиндр замка Kaba 25x35 для Danalock V3)","cost":5445,"url":"https://rus.z-wave.me/shop/kaba-cylinder-for-danalock-v3"},"KAB_PXP_25x40":{"name":"Цилиндр замка Kaba для Danalock V3 (Цилиндр замка Kaba 25x40 для Danalock V3)","cost":5690,"url":"https://rus.z-wave.me/shop/kaba-cylinder-for-danalock-v3"},"KAB_PXP_25x45":{"name":"Цилиндр замка Kaba для Danalock V3 (Цилиндр замка Kaba 25x45 для Danalock V3)","cost":5890,"url":"https://rus.z-wave.me/shop/kaba-cylinder-for-danalock-v3"},"KAB_PXP_25x50":{"name":"Цилиндр замка Kaba для Danalock V3 (Цилиндр замка Kaba 25x50 для Danalock V3)","cost":6090,"url":"https://rus.z-wave.me/shop/kaba-cylinder-for-danalock-v3"},"ZMR_HUB1-B":{"name":"Контроллер Z-Wave.Me Hub","cost":10160,"url":"https://rus.z-wave.me/shop/controller-z-waveme-hub"},"YNDX-0001S":{"name":"Умная колонка Яндекс Станция (серебристо-серая)","cost":10990,"url":"https://rus.z-wave.me/shop/yandex-station"},"YNDX-0001P":{"name":"Умная колонка Яндекс Станция (фиолетовая)","cost":10990,"url":"https://rus.z-wave.me/shop/yandex-station"},"YNDX-0001B":{"name":"Умная колонка Яндекс Станция (черная)","cost":10990,"url":"https://rus.z-wave.me/shop/yandex-station"},"YNDX-0004B":{"name":"Умная колонка Яндекс Станция Мини черная","cost":3990,"url":"https://rus.z-wave.me/shop/umnaya-kolonka-yandeks-stantsiya-mini-chernaya"},"YNDX-0004S":{"name":"Умная колонка Яндекс Станция Мини серебристо-серая","cost":3990,"url":"https://rus.z-wave.me/shop/umnaya-kolonka-yandeks-stantsiya-mini-serebristo-seraya"},"WBX 1.1":{"name":"Модульная система бесперебойного электроснабженияб 7,5 кВт/6 кВт*ч","cost":750000,"url":"https://wattsbattery.com/ru/"},"WBX 1S":{"name":"Модульная система энергообеспечения для дома с питанием от солнечных батарей, 7,5 кВт/6кВт*ч/5 кВт solar","cost":1250000,"url":"https://wattsbattery.com/ru/"},"WBB 1.0":{"name":"рюкзак Watts Battery","cost":10000,"url":"http://wattsbattery.online/"},"5kva8000":{"name":"EcoVolt.ru Система бесперебойного электроснабжения дома 5kva8000, 5 кВт/8кВт*ч","cost":220000,"url":"https://ecovolt.ru/catalog/ibp_dlitelnogo_rezerva/sistema_bespereboynogo_elektrosnabzheniya_doma_5kva8000/"},"grid-tie-3kwt":{"name":"EcoVolt.ru Комплект сетевой солнечной электростанции на 3 кВт 1Ф","cost":260000,"url":"https://ecovolt.ru/catalog/ekonomiya/nabor_dlya_ekonomii_ot_solntsa_3_kvt/"},"grid-tie-5kwt":{"name":"EcoVolt.ru Комплект сетевой солнечной электростанции на 5 кВт 1Ф","cost":429000,"url":"https://ecovolt.ru/catalog/ekonomiya/nabor_dlya_ekonomii_ot_solntsa_5_kvt/"},"ЭкоСтандарт Solar1000":{"name":"EcoVolt.ru Автономная солнечная электростанция «ЭкоСтандарт», 3 кВт/4кВт*ч/1кВт solar","cost":200000,"url":"https://ecovolt.ru/catalog/solnechnye_komplekty_stacionarnye/solnechnaya_elektrostantsiya_ekostandart_kruglosutochnogo_ispolzovaniya/"},"ЭкоПремиум Solar1500":{"name":"EcoVolt.ru Автономная солнечная электростанция «ЭкоПремиум», 3 кВт/8кВт*ч/1,5кВт solar","cost":290000,"url":"https://ecovolt.ru/catalog/solnechnye_komplekty_stacionarnye/solnechnaya_elektrostantsiya_ekopremium_kruglosutochnogo_ispolzovaniya/"},"УЗИс-С1-16-010110-ЭЛ002":{"name":"Устройство защиты от искрения EcoEnergy УЗИс-С1-16.Максимальный ток 16А.","cost":5200,"url":"http://ecolight.ru/uzis/5/"},"УЗИс-С1-25-010110-ЭЛ002":{"name":"Устройство защиты от искрения EcoEnergy УЗИс-С1-25.Максимальный ток 25А.","cost":5300,"url":"http://ecolight.ru/uzis/6/"},"УЗИс-С1-32-010110-ЭЛ002":{"name":"Устройство защиты от искрения EcoEnergy УЗИс-С1-32.Максимальный ток 32А.","cost":5400,"url":"http://ecolight.ru/uzis/7/"},"УЗИс-С1-40-010110-ЭЛ002":{"name":"Устройство защиты от искрения EcoEnergy УЗИс-С1-40.Максимальный ток 40А.","cost":5500,"url":"http://ecolight.ru/uzis/2/"},"УЗИс-С1-63-010110-ЭЛ002":{"name":"Устройство защиты от искрения EcoEnergy УЗИс-С1-63.Максимальный ток 63А.","cost":5600,"url":"http://ecolight.ru/uzis/8/"}}'
);

// Массив объектов order сохраненных оператором
var orders = [];
// Параметры по текущему заказу. Важно! Объявлять через конструктор, иначе данные массива orders не будут сохраняться
var order;
//   devices: [],
//   customer: {},
//   operator: {},
//   price: null
// };

// Выбранное устройство из таблицы с введенными параметрами  
var device;
  // id: '',
  // name: '',
  // count: null,
  // cost: null,
  // price: this.cost * this.count,
  // url: ''
// };

// Логины по умолчанию 
var operators = ['baa@z-wave.me', 'example@mail.com', 'operator@mail.com'];
var operator = {
  uid: 'Admin',
  set id(value) {
    this.uid = value;
    $('#order_data__id').text(value);
  }
};
var customer = {
  cname: 'Test Customer',
  ctel: '+7 (999) 999-99-99',
  set name(value) {
    this.cname = value;
    $('#order_data__cname').text(value);
  },
  set tel(value) {
    this.ctel = value;
    $('#order_data__ctel').text(value);
  }
}; 



function saveOrder() {
  newOrder();
  
  if (!order.devices.length) {
    alert('Необходимо выбрать хотя бы одно устройство для сохранения расчета.');
    return;
  }

  if (!$('[name=ZMR_HUB1-B]').get(0).checked) 
    if (!confirm('Обратите внимание, что для полноценной работы представленных устройств необходим контроллер. Вы желаете продолжить без него?'))
      return;
  
  orders.push(order);
}
function showSavedOrders() {
  $('#orders').empty();

  orders.forEach((el,i)=>{ 
    var text =  "Клиент: " + el.customer.cname + ", тел.: " + el.customer.ctel + "\n" +
                "Оператор: " + el.operator.uid + "\n" +
                "Сумма заказа:" + el.price + "\n\n" +
                "vendor_code, count, cost" + "\n";

    $(el.devices).each((_i,_el) => { 
      text += (_el.id + ", " + _el.count + ", " + _el.cost + "\n");
    });

    $('#orders')
      .append($('<hr>'))
      .append($('<p>').text("Order #" + i).addClass('order_details__name__p'))
      .append($('<button>').text("X").addClass('pure-button'))
      .append($('<textarea>').text(text).addClass('order__textarea pure-input'));
  });
  // nextStep();
}

function newOrder() {
  order = new Object;
  order.devices = [];
  var option_els = $(".t_params");
  for (el of option_els) {
    if (!el.value || el.value == 0 || el.value == '' || el.value < 0) continue;
    device = new Object;
    switch(el.type) {
      case 'number':
        device['id'] = el.name;
        device['count'] = parseInt(el.value);
        break;
      case 'select-one':
        device['id'] = el[el.selectedIndex].value;
        device['count'] = 1;
        break;
      case 'checkbox':
        if (!el.checked) continue;
        device['id'] = el.name;
        device['count'] = el.checked ? 1 : 0;
        break
    }
    Object.assign(device, productData[device.id]);
    device['price'] = device.count * device.cost; 

    order.devices.push(device);
  }

  order.customer = customer;
  order.operator = operator;

  updateOrderDetails(order);
}

function updateOrderDetails(order) {
  $('#order_details__ol').empty();

  order.price = 0;
  for (dev of order.devices) {
    order.price += dev.price;

    $('#order_details__ol')
      .append($('<li>').addClass('order_detail__li')
        .append($('<a>').attr("href", dev.url).text(dev.name + " [" + dev.id + "]").addClass('order_details__url__a'))
        .append($('<p>').text( + dev.price + ",00" + (dev.count > 1 ? " (" + dev.cost + "р. x " + dev.count + "шт.)" : '')).addClass('order_details__price__p')));
  }

  $('.final_device_price').text(order.price + ",00 руб.");
  $('.delivery_price').text(order.devices ? (400 + ",00 руб.") : 0);

  $('#order_details').show(300);
}

function resetData() {
  generateTable(data);
}
function exit() {
  resetData();
  nextStep(0);
}
function nextStep(x) {
  var active = $(".step_active");

  if (typeof(x) === "number")
    $(".step").get(x).classList.add("step_active");
  else if ($(".step_active").next().length)
    $(".step_active").next().addClass("step_active");
  else 
    $(".step").get(0).classList.add("step_active");

  active.hide();
  active.removeClass("step_active");
}

function updateCustomerData() {
  var form = document.forms.customer;
  customer.name = form.name.value;
  customer.tel = form.tel.value;   
  nextStep();
}
function updateOperatorData() {
  var form = document.forms.auth;
  operator.id = form.login.value;
  nextStep();
}
function insertControl(type) {
  var el, el_type;
  // if ((typeof type[0] === "object")||(typeof type[0] === "string"))
  el_type = Object.keys(type[0])[0];

  switch(el_type) {
    case "INT":
      el = document.createElement('input');
      el.classList.add('data__input', 't_params');
      el.type = 'number';
      el.name = type[0].INT;
      el.value = 0;
      el.textContent = '0';
      break;
    case "ENUM":
      el = document.createElement('select');
      el.classList.add('data__select', 't_params');
      var option = document.createElement('option'); option.text = '-'; option.value = ''; $(el).append(option);
      $.each(type[0].ENUM, function(key, value) { var option = document.createElement('option'); option.text = key; option.value = value; $(el).append(option); })
      el.selectedIndex = 0;
      break;
    case "BOOLEAN":
      el = document.createElement('input');
      el.classList.add('data__input__checkbox', 't_params');
      el.type = 'checkbox';
      el.name = type[0].BOOLEAN;
      break;
  }
  return el.outerHTML;
}

function generateTable(data) { // data is the parsed JSON Object from an ajax request
  $("#order_table > tbody").empty(); //Empty the table first   
  $.each(data.table, function(key, elem) {
    var baseHtml = "";
    var childrenHtml = "";
    var maxRowSpan = 0;
    $.each(elem, function(index, inner_elem) {
      var innerElemKey = Object.keys(inner_elem)[0];
      var arr = inner_elem[innerElemKey];
      var elemRowSpan = arr.length;
      maxRowSpan += arr.length;

      if (index === 0) {
        childrenHtml += ('<td rowspan="' + elemRowSpan + '">' + innerElemKey + '</td>');
        $.each(arr, function(indx, child) {
          if (indx === 0) {
            childrenHtml += ('<td rowspan="1">' + Object.keys(child)[0] + '</td>' + '<td rowspan="1">' + insertControl(Object.values(child)) + '</td>' + '</tr>');
          } else {
            childrenHtml += ('<tr><td rowspan="1">' + Object.keys(child)[0] + '</td>' + '<td rowspan="1">' + insertControl(Object.values(child)) + '</tr>');
          }
        });
      } else {
        childrenHtml += ('<tr><td rowspan="' + elemRowSpan + '">' + innerElemKey + '</td>');
        $.each(arr, function(indx, child) {
          if (indx === 0) {
            childrenHtml += ('<td rowspan="1">' + Object.keys(child)[0] + '</td>' + '<td rowspan="1">' + insertControl(Object.values(child)) + '</tr>');
          } else {
            childrenHtml += ('<tr><td rowspan="1">' + Object.keys(child)[0] + '</td>' + '<td rowspan="1">' + insertControl(Object.values(child)) + '</tr>');
          }
        });
      }

    });
    baseHtml += ('<tr><td rowspan="' + maxRowSpan + '">' + key + '</td>');
    $("#order_table").append(baseHtml + childrenHtml);
  });
}

$(() => {
  // nextStep(0)
  generateTable(data);
  $(".tel").mask("+7 (999) 999-99-99");
  $(".t_params").each((i,el) => { el.onchange = () => { newOrder() } });
  $(operators).each((i, val) => { $('#login__select').append($('<option>').val(val).text(val)); });
  $('[name=ZMR_HUB1-B]:not(:checked)').get(0).click();
  // $(".data__input").each((i,el) => { $(el).val('0') });
});