$(document).ready(function () {
  loadFirstSelectorData();
  loadSecondSelectorData();
  initHide();

  function loadFirstSelectorData() {

    var firstSelector = document.getElementById("first-selector");
    var selectorData = explorerData['en'];

    var defaultOption = document.createElement("option");
    defaultOption.text = '...'
    defaultOption.value = 'default';
    firstSelector.appendChild(defaultOption);

    Object.keys(selectorData).forEach(function (key) {
      var option = document.createElement("option");
      option.text = selectorData[key]['option_text']
      option.value = key;
      firstSelector.appendChild(option);
    })
  }

  function loadSecondSelectorData() {

    var secondSelector = document.getElementById("second-selector");
    var selectorData = explorerData['en'];

    Object.keys(selectorData).forEach(function (key) {
      var div = document.createElement("div");
      div.innerHTML = selectorData[key]['action_text']
      div.id = key;

      var selector = document.createElement("select");
      selector.id = selectorData[key]['selector_id']

      var defaultOption = document.createElement("option");
      defaultOption.text = '...'
      defaultOption.value = 'default';
      selector.appendChild(defaultOption);

      var optionData = selectorData[key]['data']
      Object.keys(optionData).forEach(function (key) {
        var option = document.createElement("option");
        option.text = optionData[key]['option_text']
        option.value = key;
        selector.appendChild(option);
      })

      div.appendChild(selector);
      secondSelector.appendChild(div);
    })
  }

  function initHide() {
    hideSecondSelectorChildren();
    hideDocumentation();
    hideCode();
  }

  function hideDocumentation() {
    $("#documentation").hide();
  }

  function showDocumentation() {
    $("#documentation").show();
  }

  function hideCode() {
    $("#right").hide();
  }

  function showCode() {
    $("#right").show();
  }

  $("#first-selector").change(function () {
    resetFirstSelector(this.value);
  });

  function resetFirstSelector(selectedVal) {
    hideSecondSelectorChildren();
    hideDocumentation();
    hideCode();
    $("#second-selector #" + selectedVal).show();
    $("#code").html("");
    highlightCode();
  }

  function highlightCode() {
    $('pre code').each(function (i, e) { hljs.highlightBlock(e); });
  }

  function hideSecondSelectorChildren() {
    $("#second-selector").children().hide();
  }

  // Important: need to add event listener whenever new data for first selector is added.
  $("#sel-script").change(function () {
    updateInfo('script', this.value);
  });

  $("#sel-image").change(function () {
    updateInfo('image', this.value);
  });

  $("#sel-stage").change(function () {
    updateInfo('stage', this.value);
  });

  $("#sel-when").change(function () {
    updateInfo('when', this.value);
  });

  $("#sel-artifacts").change(function () {
    updateInfo('artifacts', this.value);
  });

  $("#sel-miscellaneous").change(function () {
    updateInfo('miscellaneous', this.value);
  });

  $("#sel-others").change(function () {
    updateInfo('others', this.value);
  });

  $("#sel-advanced").change(function () {
    updateInfo('advanced', this.value);
  });

  function updateInfo(category, itemName) {
    updateCode(category, itemName);
    showDocumentation();
    showCode();
    highlightCode();
    updateDocumentation(category, itemName);
  }

  function updateCode(category, itemName) {
    $("#code").html(explorerData['en'][category]['data'][itemName]['text']);
  }

  function updateDocumentation(category, itemName) {
    var selectedItem = explorerData['en'][category]['data'][itemName];
    var elem = [];
    elem[0] = "<h2 id='doc-title'>" + selectedItem['name'] + '</h2>';
    elem[1] = '<div>' + selectedItem['desc'] + '</div>';

    var text = elem.join('');

    $('#documentation').html(text);
  }
});
