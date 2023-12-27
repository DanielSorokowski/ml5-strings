const data = [
  {
    input: "<input id='tw-odjazd' type='radio' class='mate-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='tw-przyjazd' type='radio' class='mate-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='departureFrom' type='text' class='field-with-floating-label k-input' placeholder=''>",
    isCorrect: true
  },
  {
    input: "<input id='arrivalTo' type='text' class='field-with-floating-label k-input' placeholder=''>",
    isCorrect: true
  },
  {
    input: "<input id='main-search__dateStart' type='text' class='kendoDatePicker field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='main-search__timeStart' type='text' class='kendoTimePicker field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='dirChck' type='checkbox' class='mate-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='direct-connection' type='radio' class='mate-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='indirect-connection' type='radio' class='mate-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='recaptchaResponse' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ft-odjazd' type='radio' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ft-przyjazd' type='radio' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ft-station' type='text' class='field-with-floating-label k-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ft-timeStart' type='text' class='kendoTimePicker field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ftn-number' type='text' class='field-with-floating-label k-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='searchStationMobile' type='text' class='field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='searchStationMobileAgl' type='text' class='field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='searchNumberMobile' type='text' class='field-with-floating-label' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ksAG' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ksLO' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ksDA' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ksSZ' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='mate-input options-select-all abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khPRM' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khIC_TLK' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khOSP' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khEX' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khPSP' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='khOS' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='mate-input options-select-all abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uK1' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uKL' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uBP' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uPR' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uMS' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uOB' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uNP' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uST' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uWF' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uDB' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uPK' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uML' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uUN' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uUD' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='uRM' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='mate-input options-select-all abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pAR' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pKMŁ' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pKS' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pLEO' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pŁKA' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pCARGO' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pSKMT' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pRJ' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pSKM' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pKD' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pKM' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pKW' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pLeo Express' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pODEG' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pIC' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pPR' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='pSKPL' type='checkbox' class='mate-input abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='mate-input options-select-all abt-n-db' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='cmcheck float-right mr-5 mt-2' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='operationalCheck' type='checkbox' class='cmcheck float-right mr-5 mt-2' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='statisticsCheck' type='checkbox' class='cmcheck float-right mr-5 mt-2' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='search-content' type='text' class='form-control search' placeholder='Szukaj w serwisie…'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='from-station' type='text' class='form-control form-control--switch station-autocomplete z1 ui-autocomplete-input' placeholder=''>",
    isCorrect: true
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='wcag-via' type='text' class='form-control form-control--switch station-autocomplete ui-autocomplete-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='hour2' type='text' class='form-control md-1' placeholder='00:15'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='text' class='form-control form-control--switch station-autocomplete ui-autocomplete-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='text' class='form-control md-1' placeholder='00:15'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='to-station' type='text' class='form-control form-control--switch station-autocomplete z1 ui-autocomplete-input' placeholder=''>",
    isCorrect: true
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='hour0' type='text' class='day-hour form-control' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='hour' type='text' class='day-hour form-control' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='odj' type='radio' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='prz' type='radio' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='directCheckbox' type='checkbox' class='checkbox directConnectionsOnlyCheckbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='globalBike' type='checkbox' class='checkbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='disabledTravellersCheckbox' type='checkbox' class='checkbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='kidsCheckbox' type='checkbox' class='checkbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='product_0_0' type='checkbox' class='multicheck' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='product_0_1' type='checkbox' class='multicheck' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='product_0_2' type='checkbox' class='multicheck' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='product_0_3' type='checkbox' class='multicheck' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='multicheck-suboption' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='subOp' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='withoutReservationServiceCheckbox' type='checkbox' class='checkbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='skipLongChg' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='allProvidersCheckbox' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P1' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P1FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P5' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P5FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P2' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P2FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P7' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P7FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P3' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P3FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P4' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P4FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P0' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P0FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P9' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P9FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P8' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P8FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P6' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='P6FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='O1' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='O1FinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='PZ' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='PZFinalValue' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='stname-0' type='search' class='jsStationTypeaheadItem jsNearestStationItem form-control' placeholder='np. Poznań Gł.'>",
    isCorrect: true
  },
  {
    input: "<input id='stid-0' type='hidden' class='jsTypeaheadItem-Value' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='vianame-0' type='search' class='jsStationTypeaheadItem  form-control' placeholder='np. Szczecin Gł.'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='jsTypeaheadItem-Value' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='stname-1' type='search' class='jsStationTypeaheadItem  form-control' placeholder='np. Szczecin Gł.'>",
    isCorrect: true
  },
  {
    input: "<input id='stid-1' type='hidden' class='jsTypeaheadItem-Value' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineRadio1' type='radio' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineRadio2' type='radio' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='date_picker' type='text' class='form-control datepicker-input' placeholder='RRRR-MM-DD'>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-time' type='text' class='jsTimepickerItem form-control clock-icon ui-timepicker-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineCheckbox1' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineCheckbox2' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineCheckbox3' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineCheckbox4' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='inlineCheckbox5' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-direct' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-bike' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-couchette' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-sleeper' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-for_disabled' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-braille' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ic-seek-unsharp' type='checkbox' class='form-check-input' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='jsVariable-HafasPage' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='jsVariable-HafasSort' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='jsVariable-HafasSort' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='search' class='search-field' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='submit' class='search-submit' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='fromCityId_1703152066655' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='toCityId_1703152066655' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='fromText_1703152066655' type='text' class='fldText ac_input' placeholder='Wpisz stację, miasto'>",
    isCorrect: true
  },
  {
    input: "<input id='toText_1703152066655' type='text' class='fldText ac_input' placeholder='Wpisz stację, miasto'>",
    isCorrect: true
  },
  {
    input: "<input id='dateV_1703152066655' type='text' class='fldText' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ommitDate_1703152066655' type='checkbox' class='fldCheckbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='timeV_1703152066655' type='text' class='fldText' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ommitTime_1703152066655' type='checkbox' class='fldCheckbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='returnDateV_1703152066655' type='text' class='fldText' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ommitReturnDate_1703152066655' type='checkbox' class='fldCheckbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='returnTimeV_1703152066655' type='text' class='fldText' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='fldRadio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='ommitReturnTime_1703152066655' type='checkbox' class='fldCheckbox' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='fldCheckbox fldPreferDirects' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='fldCheckbox fldPreferSellable' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='radio' class='radio' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='search' type='text' class='form-search form-control' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='station-from' type='text' class='stations form-control ui-autocomplete-input' placeholder='Stacja początkowa'>",
    isCorrect: true
  },
  {
    input: "<input id='station-from-id' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='station-to' type='text' class='stations form-control ui-autocomplete-input' placeholder='Stacja końcowa'>",
    isCorrect: true
  },
  {
    input: "<input id='station-to-id' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='date' type='text' class='form-control' placeholder='Data odjazdu'>",
    isCorrect: false
  },
  {
    input: "<input id='hour' type='text' class='form-control' placeholder='Godzina odjazdu'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='text' class='start_station' placeholder='Z'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='text' class='end_station' placeholder='DO'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='text' class='date' placeholder='KIEDY'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='submit' class='submit' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='query_start_station' type='text' class='ember-view ember-text-field string optional stations-autocomplete has-right-icon' placeholder='Z'>",
    isCorrect: true
  },
  {
    input: "<input id='query_end_station' type='text' class='ember-view ember-text-field string optional stations-autocomplete has-right-icon-medium-down' placeholder='DO'>",
    isCorrect: true
  },
  {
    input: "<input id='query_date' type='text' class='ember-view ember-text-field string optional' placeholder='KIEDY'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='text' class='_82da8 _df5b8 _b355f' placeholder='Z: Miejscowość, dworzec, lotnisko lub port'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='text' class='_82da8 _df5b8' placeholder='Do: Miejscowość, dworzec, lotnisko lub port'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='checkbox' class='react-toggle-screenreader-only' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='menu-search' type='text' class='form-control' placeholder='Wpisz szukaną frazę'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='text' class='start_station' placeholder='Stacja Odjazdu'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='text' class='end_station' placeholder='Stacja Przyjazdu'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='text' class='date' placeholder='KIEDY'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='submit' class='submit' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='fromLocation' type='text' class='' placeholder='Wyjazd z'>",
    isCorrect: false
  },
  {
    input: "<input id='toLocation' type='text' class='' placeholder='Przyjazd do'>",
    isCorrect: false
  },
  {
    input: "<input id='departuredate' type='text' class='form-control js-datepicker' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='departuretime' type='text' class='form-control js-timepicker' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='arrivedepart' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='autocompletetype' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='showhidestations' type='checkbox' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='0b5041ce-4661-4b64-ab43-c1f697c79b7a' type='search' class='search__form-input-compact js-search-input' placeholder='Szukaj'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='0b5041ce-4661-4b64-ab43-c1f697c79b7a' type='search' class='search__form-input-compact js-search-input' placeholder='Szukaj'>",
    isCorrect: false
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='q-mobile' type='search' class='search__form-input-compact ' placeholder='Szukaj'>",
    isCorrect: false
  },
  {
    input: "<input id='02ce4fbe-7ed9-452d-995c-99e0133ee8a6-input' type='text' class='db-web-autocomplete__input-field test-autocomplete-input db-web-autocomplete__input-field--quickfinder db-web-autocomplete__input-field--light' placeholder='Z'>",
    isCorrect: true
  },
  {
    input: "<input id='e31421c7-53f7-4a6b-8073-f62ca3947751-input' type='text' class='db-web-autocomplete__input-field test-autocomplete-input db-web-autocomplete__input-field--quickfinder db-web-autocomplete__input-field--light' placeholder='Do'>",
    isCorrect: true
  },
  {
    input: "<input id='' type='hidden' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='KLASSE_1' type='radio' class='' placeholder=''>",
    isCorrect: false
  },
  {
    input: "<input id='KLASSE_2' type='radio' class='' placeholder=''>",
    isCorrect: false
  }
];

const options = {
  task: 'classification',
  debug: true
}

const nn = ml5.neuralNetwork(options);

data.forEach((item) => {
  const inputs = {
    input: item.input
  }
  console.log(inputs)
  const output = {
    isCorrect: item.isCorrect ? 'correct' : 'incorrect',
  };

  nn.addData(inputs, output);
});

nn.normalizeData();

const trainingOptions = {
  epochs: 32,
  batchSize: 12
}

nn.train(trainingOptions, finishedTraining);

function finishedTraining(){
  classify();
  console.log('trining finished')
}

function classify(){
  const input = {
    input: "<input id='departureFrom' type='text' class='field-with-floating-label k-input' placeholder=''>",
    
  }
  nn.classify(input, handleResults);
}

function handleResults(error, result) {
  if(error){
    console.error(error);
    return;
  }
  console.log(result)
}

{/* <input id='departure' type='search' class='form-control autocomplete-input' placeholder='Von Stadt oder Bahnhof'></input> */}











// function convertStringToAscii(inputString, fixedLength = 175) {
//   let asciiArray = '';
//   for (let i = 0; i < fixedLength; i++) {
//       if (i < inputString.length) {
//           asciiArray += inputString.charCodeAt(i)
//       } else {
//           asciiArray += '0'
//       }
//   }
//   return asciiArray;
// }

// function djb2Hash(str) {
//     let hash = 5381;
//     for (let i = 0; i < str.length; i++) {
//         hash = (hash * 33) ^ str.charCodeAt(i);
//     }
//     return hash >>> 0; // Ensure the result is an unsigned 32-bit integer
// }