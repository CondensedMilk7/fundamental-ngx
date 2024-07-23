/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_ROMANIAN: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Selectați anul',
        yearsRangeSelectionLabel: 'Selectați intervalul de ani',
        monthSelectionLabel: 'Selectați luna',
        dateSelectionLabel: 'Selectați data',
        previousYearLabel: 'Anul anterior',
        nextYearLabel: 'Anul viitor',
        previousMonthLabel: 'Luna precedentă',
        nextMonthLabel: 'Luna viitoare',
        weekColumnLabel: 'Săptămână calendaristică',
        dateSelectedLabel: 'Data selectată',
        todayLabel: 'Astăzi',
        rangeStartLabel: 'Început interval',
        rangeEndLabel: 'Sfârșit interval',
        dayInPastLabel: 'Zile anterioare',
        closeCalendarLabel: 'Închidere calendar',
        calendarDayViewDescription: 'Calendar',
        calendarMonthViewDescription: 'Selector lună',
        calendarYearsViewDescription: 'Selector an',
        calendarYearsRangeViewDescription: 'Selector interval de ani'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Selectare toate ({{selectedItems}} din {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Salt la articol anterior',
        rightNavigationBtnLabel: 'Salt la articol următor'
    },
    coreDatePicker: {
        dateInputLabel: 'Intrare dată',
        dateRangeInputLabel: 'Intrare interval de termene',
        displayCalendarToggleLabel: 'Deschidere selector',
        valueStateSuccessMessage: 'Stare valoare Reușită',
        valueStateInformationMessage: 'Stare valoare Informații',
        valueStateWarningMessage: 'Stare valoare Avertizare',
        valueStateErrorMessage: 'Stare valoare Eroare'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Intrare dată/oră',
        displayDatetimeToggleLabel: 'Afișare comutare calendar',
        displayTypeDateLabel: 'Data',
        displayTypeTimeLabel: 'Ora',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'Anulare'
    },
    coreFeedListItem: { moreLabel: 'Încă {{count}}', lessLabel: 'Mai puțin' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Anulare',
        listItemStatusAriaLabel: 'Articolul are stare. Stare: {{status}}.',
        listItemCounterAriaLabel: 'Articolul are {{count}} elemente subordonate.',
        listItemButtonDetailsTitle: 'Detalii',
        listItemButtonDeleteTitle: 'Ștergere',
        listItemStatusContainsErrors: 'Conține erori',
        listItemStatusLocked: 'Blocat',
        listItemStatusDraft: 'Schiță'
    },
    coreMessageStrip: { dismissLabel: 'Respingere' },
    coreMultiInput: {
        multiInputAriaLabel: 'Intrare valori multiple',
        noResults: 'Niciun rezultat.',
        navigateSelectionsWithArrows: 'Navigați printre selecții cu săgețile în sus și în jos.',
        countListResultsSingular: '1 articol în lista de rezultate.',
        countListResultsPlural: '{{0}} articole în lista de rezultate.',
        escapeNavigateTokens:
            'Apăsați tasta ESC pentru a ieși din câmpul de intrare și utilizați tastele săgeți la stânga și la dreapta pentru a naviga printre opțiunile selectate.',
        tokensCountText: (params) => {
            return `Conține ${(() => {
                if (params['length'] == 0) {
                    return `no token`;
                }
                if (params['length'] == 1) {
                    return `1 token`;
                } else {
                    return `${params['length']} tokens`;
                }
            })()}.`;
        }
    },
    coreNavigation: { mainNavigation: 'Meniul principal', navigationPath: 'Cale de navigare' },
    coreNestedList: {
        linkItemAriaLabel: 'Element din arbore {{itemDetails}}, {{index}} din {{total}}{{selectedDescription}}'
    },
    coreOverflowLayout: { moreItemsButton: 'Încă {{count}}' },
    corePagination: {
        pageLabel: 'Pagina {{pageNumber}}',
        currentPageAriaLabel: 'Pagina {{pageNumber}} este pagina curentă',
        labelBeforeInputMobile: 'Pagina:',
        labelAfterInputMobile: 'din {{totalCount}}',
        inputAriaLabel: 'Introducerea paginii, Pagina curentă, Pagina {{pageNumber}} din {{totalCount}}',
        itemsPerPageLabel: 'Rezultate pe pagină:',
        firstLabel: 'Prima',
        previousLabel: 'Înapoi',
        nextLabel: 'Înainte',
        lastLabel: 'Ultima',
        ariaLabel: 'Paginație',
        totalResultsLabel: '{{totalCount}} rezultate'
    },
    coreProductSwitch: { ariaLabel: 'Comutator produse' },
    coreShellbar: { collapsedItemMenuLabel: 'Meniu de elemente comprimate', cancel: 'Anulare', search: 'Căutare' },
    coreSlider: {
        singleMinMaxDetails: 'Valoare minimă cursor de reglare este {{min}}, valoare maximă este {{max}}',
        singleValueminDetails: 'Valoarea este {{value}}',
        singleValuemaxDetails: 'Valoarea este {{value}}',
        singleValueNowDetails: 'Valoare curentă este {{value}}',
        multipleHandle1MinMaxDetails: 'Valoare minimă cursor de reglare este {{min}}, valoare maximă este {{max}}',
        multipleHandle1ValueminDetails: 'Valoarea este {{value}}',
        multipleHandle1ValuemaxDetails: 'Valoarea este {{value}}',
        multipleHandle1ValueNowDetails: 'Valoare curentă este {{value}}',
        multipleHandle2MinMaxDetails: 'Valoare minimă cursor de reglare este {{min}}, valoare maximă este {{max}}',
        multipleHandle2ValueminDetails: 'Valoarea este {{value}}',
        multipleHandle2ValuemaxDetails: 'Valoarea este {{value}}',
        multipleHandle2ValueNowDetails: 'Valoarea curentă este {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'Mai multe acțiuni', arialLabel: 'Buton de divizare' },
    coreSplitter: { paginationItemAriaLabel: 'Secțiune' },
    coreStepInput: {
        incrementButtonTitle: 'Creștere',
        decrementButtonTitle: 'Scădere',
        ariaRoleDescription: 'Intrare etapă'
    },
    coreSwitch: { semanticAcceptLabel: 'Acceptare', semanticDeclineLabel: 'Refuzare' },
    coreTabs: { tabListExpandButtonText: 'Mai mult' },
    coreText: { moreLabel: 'Mai mult', lessLabel: 'Mai puțin' },
    coreTime: {
        componentAriaName: 'Selector oră',
        increaseHoursLabel: 'Creștere ore',
        hrsLabel: 'h',
        decreaseHoursLabel: 'Scădere ore',
        increaseMinutesLabel: 'Creștere minute',
        minLabel: 'min.',
        decreaseMinutesLabel: 'Scădere minute',
        increaseSecondsLabel: 'Creștere secunde',
        secLabel: 'sec.',
        hoursLabel: 'Ore',
        minutesLabel: 'Minute',
        secondsLabel: 'Secunde',
        decreaseSecondsLabel: 'Scădere secunde',
        increasePeriodLabel: 'Creștere perioadă',
        periodLabel: 'Perioadă',
        decreasePeriodLabel: 'Scădere perioadă',
        navigationInstruction:
            'Pentru a vă deplasa între articolele din această listă, apăsați săgeata în sus sau săgeata în jos. Pentru a comuta între liste, apăsați săgeata la stânga sau săgeata la dreapta.'
    },
    coreTimePicker: { timePickerInputLabel: 'Intrare selector oră', timePickerButtonLabel: 'Deschidere selector' },
    coreToken: { deleteButtonLabel: 'Poate fi șters', ariaRoleDescription: 'token' },
    coreTokenizer: { moreLabel: 'Încă {{count}}', tokenizerLabel: 'Generator de tokenuri' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'Anulare',
        menuEditAriaLabel: 'Modificare',
        menuDeleteAriaLabel: 'Ștergere',
        menuOkAriaLabel: 'Modificare',
        menuCancelAriaLabel: 'Anulare',
        formItemPlaceholder: 'Numele fișierului'
    },
    coreWizard: { ariaLabel: 'Aplicație-asistent' },
    coreBreadcrumb: { overflowTitleMore: 'Mai mult' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Adăugare nod',
        nodeMenuButtonTitle: 'Meniu',
        defaultWatchersLabel: 'Observatori',
        defaultTitle: 'Proces de aprobare',
        nextButtonAriaLabel: 'Salt la diapozitivul următor',
        prevButtonAriaLabel: 'Salt la diapozitivul anterior',
        editModeSaveButtonLabel: 'Salvare',
        editModeExitButtonLabel: 'Ieșire',
        emptyTitle: 'Începeți să adăugați aprobatori și observatori',
        emptyHint:
            'Pentru a adăuga aprobatori, faceți clic pe „Adăugare o etapă”. Pentru a adăuga observatori, faceți clic pe câmpul Observatori.',
        addNodeDialogHeaderAddApprovers: 'Adăugare aprobatori',
        addNodeDialogHeaderEditApprover: 'Modificare aprobator',
        addNodeDialogHeaderAddApproverTeam: 'Utilizator/Echipă',
        addNodeDialogHeaderDetail: 'Detaliu',
        addNodeDialogNodeType: 'În paralel sau în serie',
        addNodeDialogNodeTypeSerial: 'În serie',
        addNodeDialogNodeTypeParallel: 'În paralel',
        addNodeDialogApproverType: 'Tip de aprobator',
        addNodeDialogApproverTypeUser: 'Un utilizator',
        addNodeDialogApproverTypeTeamAnyone: 'Oricine din echipă',
        addNodeDialogApproverTypeTeamEveryone: 'Toți din echipă',
        addNodeDialogUserOrTeam: 'Utilizator/Echipă',
        addNodeDialogAddToNext: 'Adăugare la următorul nod în serie',
        addNodeDialogDueDate: 'Scadență',
        addNodeSearchPlaceholder: 'Căutare',
        addNodeAddActionBtnLabel: 'Adăugare',
        addNodeCancelActionBtnLabel: 'Anulare',
        addNodeSelectApproverActionBtnLabel: 'Selectare',
        addNodeCancelApproverSelectionActionBtnLabel: 'Anulare',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Închidere',
        userDetailsHeader: 'Detaliu',
        userDetailsSendReminderBtnLabel: 'Trimitere memento',
        userDetailsCancelBtnLabel: 'Anulare',
        messagesApproverAddedSuccess: '1 aprobator a fost adăugat',
        messagesTeamAddedSuccess: '1 echipă a fost adăugată',
        messagesNodeEdited: '1 aprobator a fost modificat',
        messagesNodeRemovedSingular: '1 aprobator a fost eliminat',
        messagesNodeRemovedPlural: 'Aprobatorii au fost eliminați',
        messagesTeamRemoved: '1 echipă a fost eliminată',
        messagesErrorBuildGraph:
            'A survenit o eroare la încercarea de compilare a graficului. Verificați datele inițiale.',
        messagesUndoAction: 'Anulare acțiune',
        nodeMembersCount: '{{count}} membri',
        nodeVariousTeams: 'Diverse echipe',
        nodeStatusDueToday: 'Scadent astăzi',
        nodeStatusDueInXDays: 'Scadent în {{count}} zile',
        nodeStatusXDaysOverdue: '{{count}} zile întârziere',
        nodeActionAddApproversBefore: 'Adăugare aprobatori înainte',
        nodeActionAddApproversAfter: 'Adăugare aprobatori după',
        nodeActionAddApproversParallel: 'Adăugare aprobatori în paralel',
        nodeActionEditApprover: 'Modificare aprobator',
        nodeActionRemove: 'Eliminare',
        selectTypeDialogMoveApproverAs: 'Mutare aprobator ca',
        selectTypeDialogParallelOrSerial: 'În paralel sau în serie',
        selectTypeDialogNodeTypeParallel: 'Aprobator în paralel',
        selectTypeDialogNodeTypeSerial: 'Aprobator în serie',
        selectTypeDialogConfirmButton: 'Confirmare',
        selectTypeDialogCancelButton: 'Anulare',
        toolbarAddStepButton: 'Adăugare o etapă',
        toolbarEditButton: 'Modificare',
        toolbarAddApproversBefore: 'Adăugare aprobatori înainte',
        toolbarAddApproversAfter: 'Adăugare aprobatori după',
        toolbarAddApproversParallel: 'Adăugare aprobatori în paralel',
        toolbarRemove: 'Eliminare',
        toolbarEditApprover: 'Modificare aprobator',
        watchersInputPlaceholder: 'Căutați aici...',
        userListSelectedItemsCountSingular: '1 articol selectat',
        userListSelectedItemsCountPlural: '{{count}} articole selectate',
        statusApproved: 'aprobat',
        statusRejected: 'respins',
        statusInProgress: 'în desfășurare',
        statusNotStarted: 'neînceput'
    },
    platformFeedInput: { userTitle: 'Utilizator' },
    platformVHD: {
        selectedAndConditionLabel: 'Articole și condiții selectate',
        footerClearSelectedTitle: 'golire articole selectate',
        footerClearSelectedAriaLabel: 'golire articole selectate',
        searchButtonLabel: 'Lansare',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Anulare',
        selectedEmptyLabel: 'Niciun articol sau condiție selectată',
        searchPlaceholder: 'Căutare',
        searchAdvancedSearchLabel: 'Filtre',
        searchShowAdvancedSearchLabel: 'Afișare filtre',
        searchHideAdvancedSearchLabel: 'Ascundere filtre',
        searchShowAllAdvancedSearchLabel: 'Afișare toate filtrele',
        searchHideAllAdvancedSearchLabel: 'Ascundere toate filtrele',
        selectTabDisplayCountLabel: 'Articole ({{count}})',
        selectTabMoreBtnLabel: 'Mai mult',
        selectTabCountHiddenA11yLabel: 'conține {{rowCount}} rânduri și {{colCount}} coloane',
        selectMobileTabBackBtnTitle: 'Înapoi',
        selectMobileTabBtnOpenDialogLabel: 'Deschidere dialog',
        selectMobileTabTitle: 'Fila {{title}}',
        selectMobileConditionEmpty: 'Goală',
        defineConditionTitle: 'Produs',
        defineConditionSelectedValueHiddenA11yLabel: 'valoarea selectată {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Includere',
        defineConditionConditionsGroupHeaderExclude: 'Excludere',
        defineConditionFromPlaceholder: 'de la',
        defineConditionToPlaceholder: 'la',
        defineConditionValuePlaceholder: 'valoarea',
        defineConditionRemoveConditionButtonTitle: 'Eliminare condiție',
        defineConditionAddConditionButtonLabel: 'Adăugare',
        defineConditionAddConditionButtonTitle: 'Adăugare condiție',
        defineConditionConditionStrategyLabelContains: 'conține',
        defineConditionConditionStrategyLabelEqualTo: 'egal cu',
        defineConditionConditionStrategyLabelBetween: 'între',
        defineConditionConditionStrategyLabelStartsWith: 'începe cu',
        defineConditionConditionStrategyLabelEndsWith: 'se termină cu',
        defineConditionConditionStrategyLabelLessThan: 'mai mic decât',
        defineConditionConditionStrategyLabelLessThanEqual: 'mai mic decât sau egal cu',
        defineConditionConditionStrategyLabelGreaterThan: 'mai mare decât',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'mai mare decât sau egal cu',
        defineConditionConditionStrategyLabelEmpty: 'gol',
        defineConditionConditionStrategyLabelNotEqualTo: 'nu este egal cu',
        defineConditionConditionStrategyLabelNotEmpty: 'nu este gol',
        defineConditionMaxCountError: 'Introduceți o valoare cu cel mult {{count}} caractere',
        selectTabTitle: 'Selectare din listă',
        searchTableEmptyMessage: 'Utilizați căutarea pentru a obține rezultate',
        defineTabTitle: 'Definire condiţii'
    },
    platformCombobox: {
        countListResultsSingular: '1 articol în lista de rezultate',
        countListResultsPlural: '{{count}} articole în lista de rezultate'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Opțiuni de selecție',
        inputIconTitle: 'Opțiuni de selecție',
        mobileShowAllItemsButton: 'Afișare toate articolele',
        mobileShowSelectedItemsButton: 'Afișare articole selectate'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 caracter peste limită',
        counterMessageCharactersOverTheLimitPlural: '{{count}} caractere peste limită',
        counterMessageCharactersRemainingSingular: '1 caracter rămas',
        counterMessageCharactersRemainingPlural: '{{count}} caractere rămase'
    },
    platformLink: { roleDescriptionWithMedia: 'Media: {{media}}' },
    platformList: { loadingAriaLabel: 'se încarcă' },
    platformObjectListItem: { detailsActionAriaLabel: 'detaliu', deleteActionAriaLabel: 'ștergere' },
    platformStandardListItem: { detailsActionAriaLabel: 'detaliu', deleteActionAriaLabel: 'ștergere' },
    platformSearchField: {
        clearButtonTitle: 'Golire',
        submitButtonTitle: 'Căutare',
        searchInputLabel: 'Căutare',
        synchronizeButtonTitle: 'Sincronizare',
        searchSuggestionMessage: '{{count}} sugestii găsite.',
        searchSuggestionNavigateMessage: 'utilizați săgețile în sus și în jos pentru a naviga'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Căutare',
        submitButtonLabel: 'Lansare',
        filtersButtonLabel: 'Filtre ({{filtersCount}})',
        showFiltersButtonLabel: 'Afișare filtre',
        hideFiltersButtonLabel: 'Ascundere filtre',
        defineConditionsRemoveConditionButtonTitle: 'Eliminare condiție',
        defineConditionsAddConditionButtonLabel: 'Adăugare condiție',
        defineConditionsSubmitButtonLabel: 'Lansare',
        defineConditionsCancelButton: 'Anulare',
        selectFiltersHeader: 'Filtre',
        selectFiltersAvailableFiltersText: 'Filtre disponibile',
        selectFiltersFilterColumnLabel: 'Filtru',
        selectFiltersActiveColumnLabel: 'Activ',
        selectFiltersSubmitButtonLabel: 'Lansare',
        selectFiltersCancelButton: 'Anulare',
        filterConditionContains: 'conține',
        filterConditionEqualTo: 'egal cu',
        filterConditionBetween: 'între',
        filterConditionBeginsWith: 'începe cu',
        filterConditionEndsWith: 'se termină cu',
        filterConditionLessThan: 'mai mic decât',
        filterConditionLessThanOrEqualTo: 'mai mic decât sau egal cu',
        filterConditionGreaterThan: 'mai mare decât',
        filterConditionGreaterThanOrEqualTo: 'mai mare decât sau egal cu',
        filterConditionAfter: 'după',
        filterConditionOnOrAfter: 'pe sau după',
        filterConditionBefore: 'înainte',
        filterConditionBeforeOrOn: 'înainte sau pe',
        filterConditionValuePlaceholder: 'valoarea',
        filterConditionValueFromPlaceholder: 'de la',
        filterConditionValueToPlaceholder: 'la',
        settingsCategoryAll: 'Toate',
        settingsCategoryVisible: 'Vizibil',
        settingsCategoryActive: 'Activ',
        settingsCategoryVisibleAndActive: 'Vizibil și activ',
        settingsCategoryMandatory: 'Obligatoriu',
        manageFieldConditions: 'Gestionare condiții de câmp',
        refreshButtonAriaLabel: 'Împrospătare'
    },
    platformTable: {
        headerMenuSortAsc: 'Sortare în ordine crescătoare',
        headerMenuSortDesc: 'Sortare în ordine descrescătoare',
        headerMenuGroup: 'Grupare',
        headerMenuFreeze: 'Freeze column',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Unfreeze column',
        headerMenuFreezePlural: 'Freeze columns',
        headerMenuUnfreezePlural: 'Unfreeze columns',
        headerMenuFilter: 'Filtrare',
        defaultEmptyMessage: 'Nu s-au găsit date',
        emptyCell: 'Goală',
        noVisibleColumnsMessage:
            'În acest moment, nu există coloane vizibile în tabel. Selectați coloanele de care aveți nevoie în setările tabelului.',
        resetChangesButtonLabel: 'Resetare',
        editableCellNumberPlaceholder: 'Introduceți valoarea',
        editableCellDatePlaceholder: 'Introduceți valoarea',
        editableCellStringPlaceholder: 'Introduceți valoarea',
        P13ColumnsDialogHeader: 'Coloane',
        P13ColumnsDialogSearchPlaceholder: 'Căutare',
        P13ColumnsDialogsShowSelected: 'Afișare selectate',
        P13ColumnsDialogShowAll: 'Afișare tot',
        P13ColumnsDialogSelectAll: 'Selectare toate ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Anulare',
        P13ColumnsDialogMoveToTopBtn: 'Mutare la început',
        P13ColumnsDialogMoveUpBtn: 'Mutare în sus',
        P13ColumnsDialogMoveDownBtn: 'Mutare în jos',
        P13ColumnsDialogMoveToBottomBtn: 'Mutare la sfârșit',
        P13FilterStrategyLabelBetween: 'între',
        P13FilterStrategyLabelContains: 'conține',
        P13FilterStrategyLabelBeginsWith: 'începe cu',
        P13FilterStrategyLabelEndsWith: 'se termină cu',
        P13FilterStrategyLabelEqualTo: 'egal cu',
        P13FilterStrategyLabelGreaterThan: 'mai mare decât',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'mai mare decât sau egal cu',
        P13FilterStrategyLabelLessThan: 'mai mic decât',
        P13FilterStrategyLabelLessThanOrEqualTo: 'mai mic decât sau egal cu',
        P13FilterStrategyLabelAfter: 'după',
        P13FilterStrategyLabelOnOrAfter: 'pe sau după',
        P13FilterStrategyLabelBefore: 'înainte',
        P13FilterStrategyLabelBeforeOrOn: 'înainte sau pe',
        P13FilterStrategyLabelNotDefined: 'Nedefinit',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Da',
        P13FilterBooleanOptionFalse: 'Nu',
        P13FilterDialogHeader: 'Filtrare după',
        P13FilterDialogIncludePanelTitleWithCount: 'Includere ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Includere',
        P13FilterDialogExcludePanelTitleWithCount: 'Excludere ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Excludere',
        P13FilterDialogRemoveFilterBtnTitle: 'Eliminare filtru',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Anulare',
        P13GroupDialogHeader: 'Grupare',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(niciunul)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Afișare câmp ca coloană',
        P13GroupDialogRemoveGroupBtnTitle: 'Eliminare',
        P13GroupDialogAddNewGroupBtnTitle: 'Adăugare nou',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Anulare',
        P13SortDialogHeader: 'Sortare',
        P13SortDialogNoneSelectedColumn: '(niciunul)',
        P13SortDialogNoneSelectedSorting: '(niciunul)',
        P13SortDialogSortOrderSelectOptionAsc: 'Ordine crescătoare',
        P13SortDialogSortOrderSelectOptionDesc: 'Ordine descrescătoare',
        P13SortDialogRemoveSortBtnTitle: 'Eliminare',
        P13SortDialogAddNewSortBtnTitle: 'Adăugare nou',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Anulare',
        toolbarSearchPlaceholder: 'Căutare',
        toolbarActionCreateButtonLabel: 'Creare',
        toolbarActionSaveButtonLabel: 'Salvare',
        toolbarActionCancelButtonLabel: 'Anulare',
        toolbarActionSortButtonTitle: 'Sortare',
        toolbarActionFilterButtonTitle: 'Filtrare',
        toolbarActionGroupButtonTitle: 'Grupare',
        toolbarActionColumnsButtonTitle: 'Coloane',
        toolbarActionExpandAllButtonTitle: 'Extindere tot',
        toolbarActionCollapseAllButtonTitle: 'Restrângere tot',
        filterDialogNotFilteredLabel: '(Nefiltrat)',
        filterDialogFilterByLabel: 'Filtrare după: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtru',
        filterDialogFilterBy: 'Filtrare după',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Anulare',
        groupDialogHeader: 'Grupare',
        groupDialogGroupOrderHeader: 'Ordine de grupare',
        groupDialogGroupOrderAsc: 'Ordine crescătoare',
        groupDialogGroupOrderDesc: 'Ordine descrescătoare',
        groupDialogGroupByHeader: 'Grupare după',
        groupDialogNotGroupedLabel: '(Negrupat)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Anulare',
        sortDialogHeader: 'Sortare',
        sortDialogSortOrderHeader: 'Ordine de sortare',
        sortDialogSortOrderAsc: 'Ordine crescătoare',
        sortDialogSortOrderDesc: 'Ordine descrescătoare',
        sortDialogSortByHeader: 'Sortare după',
        sortDialogNotSortedLabel: '(Nesortat)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Anulare',
        selectAllCheckboxLabel: 'Selectare toate',
        deselectAllCheckboxLabel: 'Deselectare toate',
        deselectSingleRow: 'Pentru a deselecta linia, apăsați pe BARA DE SPAȚIU',
        selectSingleRow: 'Pentru a selecta linia, apăsați pe BARA DE SPAȚIU'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Go to Previous',
        detailsGotoNextButtonTitle: 'Go to Next',
        detailsDialogCloseBtnLabel: 'Close',
        roleDescription: 'Image'
    },
    platformUploadCollection: {
        moveToTitle: 'Move to',
        moveToTitleFolder: 'Folder',
        moveToNewFolderBtnLabel: 'New Folder',
        moveToAllFilesSubHeaderLabel: 'All files',
        moveToConfirmBtn: 'Move',
        moveToCloseBtn: 'Cancel',
        newFolderTitle: 'New folder',
        newFolderAtRootInputLabel: 'Name of new folder',
        newFolderAtFolderInputLabel: 'Name of new folder inside of {{ folderName }}',
        newFolderInputPlaceholder: 'Type here..',
        newFolderInputErrorLabel: 'Maximum {{ count }} characters allowed',
        newFolderDialogCreateBtnLabel: 'Create',
        newFolderDialogCancelBtnLabel: 'Cancel',
        breadcrumbLabelAllFiles: 'All files',
        breadcrumbLabelAllFilesWithTotal: 'All files ({{ total }})',
        searchPlaceholder: 'Search',
        addBtnLabel: 'Add',
        newFolderBtnLabel: 'New Folder',
        moveToBtnLabel: 'Move to',
        downloadBtnLabel: 'Download',
        updateVersionBtnLabel: 'Update version',
        removeBtnLabel: 'Remove',
        folderIconTitle: 'Folder icon',
        fileIconTitle: 'File icon',
        editFileNameInputPlaceholder: 'Enter a name',
        editFileNameFileAlreadyExistsError: 'File with this name already exists',
        editFileNameFolderAlreadyExistsError: 'Folder with this name already exists',
        itemStatusSuccessful: 'Successful',
        itemStatusUnsuccessful: 'Unsuccessful',
        uploadNewFileAfterFailAction: 'Run',
        cancelUploadNewFileAction: 'Cancel',
        itemMenuBtnTitle: 'More',
        dragDropAreaText: 'Drag files to upload',
        noDataText: 'No files found',
        noDataDescription: 'Drop files to upload, or use the “Add” button.',
        paginationTotal: 'Showing {{ from }}-{{ to }} of {{ total }}',
        resultsPerPage: 'Results per page',
        messageCreateFailed: 'Failed to create {{ folderName }}.',
        messageCreateSuccess: '{{ folderName }} has been created.',
        messageUpdateVersionFailed: 'Failed to update version of {{ folderName }}.',
        messageUpdateVersionSuccess: '{{ folderName }} version has been updated.',
        messageFileRenameFailed: 'Failed to rename "{{ from }}" to "{{ to }}."',
        messageFileRenameSuccess: '"{{ from }}" has been renamed to "{{ to }}".',
        messageRemoveFoldersAndFilesFailed: 'Failed to remove {{ foldersCount }} folders and {{ filesCount }} files.',
        messageRemoveFoldersAndFilesSuccess: '{{ foldersCount }} folders and {{ filesCount }} files have been removed.',
        messageRemoveFoldersFailed: 'Failed to remove {{ foldersCount }} folders.',
        messageRemoveFoldersSuccess: '{{ foldersCount }} folders have been removed.',
        messageRemoveFilesFailed: 'Failed to remove {{ filesCount }} files.',
        messageRemoveFilesSuccess: '{{ filesCount }} files have been removed.',
        messageRemoveFileOrFolderFailed: 'Failed to remove {{ name }}.',
        messageRemoveFileOrFolderSuccess: '{{ name }} has been removed.',
        messageMoveFoldersAndFilesFailed:
            'Failed to move {{ foldersCount }} folders and {{ filesCount }} files to {{ to }}.',
        messageMoveFoldersAndFilesSuccess:
            '{{ foldersCount }} folders and {{ filesCount }} files have been moved to {{ to }}.',
        messageMoveFoldersFailed: 'Failed to move {{ foldersCount }} folders to {{ to }}.',
        messageMoveFoldersSuccess: '{{ foldersCount }} folders have been moved to {{ to }}.',
        messageMoveFilesFailed: 'Failed to move {{ filesCount }} files to {{ to }}.',
        messageMoveFilesSuccess: '{{ filesCount }} files have been moved to {{ to }}.',
        messageMoveFileOrFolderFailed: 'Failed to move {{ name }} to {{ to }}.',
        messageMoveFileOrFolderSuccess: '{{ name }} has been moved to {{ to }}.',
        messageMoveRootFoldersAndFilesFailed:
            'Failed to move {{ foldersCount }} folders and {{ filesCount }} files to all files.',
        messageMoveRootFoldersAndFilesSuccess:
            '{{ foldersCount }} folders and {{ filesCount }} files have been moved to all files.',
        messageMoveRootFoldersFailed: 'Failed to move {{ foldersCount }} folders to all files.',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} folders have been moved to all files.',
        messageMoveRootFilesFailed: 'Failed to move {{ filesCount }} files to all files.',
        messageMoveRootFilesSuccess: '{{ filesCount }} files have been moved to all files.',
        messageMoveRootFileOrFolderFailed: 'Failed to move {{ name }} to all files.',
        messageMoveRootFileOrFolderSuccess: '{{ name }} has been moved to all files.',
        messageFileTypeMismatchPlural: '{{ filesCount }} files have the wrong type. Allowed types: {{ allowedTypes }}.',
        messageFileTypeMismatchSingular:
            'The file "{{ fileName }}" has the wrong type. Allowed types: {{ allowedTypes }}.',
        messageFileSizeExceededPlural:
            '{{ filesCount }} files exceeded the maximum file size. Allowed max file size: {{ maxFileSize }}.',
        messageFileSizeExceededSingular:
            'The file "{{ fileName }}" exceeded the maximum file size. Allowed max file size: {{ maxFileSize }}.',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} files exceeded the maximum filename length. Allowed filename length: {{ maxFilenameLength }} characters.',
        messageFileNameLengthExceededSingular:
            'The name "{{ fileName }}" exceeded the maximum filename length. Allowed filename length: {{ maxFilenameLength }} characters.'
    },
    platformWizardGenerator: { summarySectionEditStep: 'Modificare' },
    platformMessagePopover: {
        allErrors: 'Toate',
        defaultErrors: {
            email: 'E-mailul este nevalid',
            max: 'Câmpul depășește valoarea maximă',
            maxLength: 'Câmpul depășește lungimea maximă',
            min: 'Valoarea câmpului este mai mică decât cea permisă',
            minLength: 'Lungimea câmpului este mai mică decât cea permisă',
            pattern: 'Valoarea câmpului este nevalidă',
            required: 'Câmpul este obligatoriu',
            requiredTrue: 'Câmpul este obligatoriu'
        }
    },
    platformVariantManagement: {
        manage: 'Gestionare',
        saveAs: 'Salvare ca',
        saveView: 'Salvare afișare',
        save: 'Salvare',
        myViews: 'Afișările mele',
        view: 'Afișare',
        setAsDefault: 'Setare ca standard',
        public: 'Public',
        applyAutomatically: 'Aplicare automată',
        requiredFieldError: 'Acest câmp este obligatoriu.',
        nameTakenFieldError: 'O variantă cu un astfel de nume există deja. Alegeți un alt nume.',
        cancel: 'Anulare',
        manageViews: 'Gestionare afișări',
        markAsFavourite: 'Marcare ca favorită',
        sharing: 'Partajare',
        default: 'Standard',
        createdBy: 'Creat(ă) de',
        removeVariant: 'Eliminare afișare',
        search: 'Căutare',
        access: { public: 'Public', private: 'Privat' }
    },
    platformSelect: { selectOptionLabel: 'Selectați o opțiune' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'Expandare nod', collapse: 'Restrângere nod', noData: 'Nu sunt date' }
};
