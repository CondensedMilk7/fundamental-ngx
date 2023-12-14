/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_HUNGARIAN: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Év kiválasztása',
        yearsRangeSelectionLabel: 'Évtartomány kiválasztása',
        monthSelectionLabel: 'Hónap kiválasztása',
        dateSelectionLabel: 'Dátum kiválasztása',
        previousYearLabel: 'Előző év',
        nextYearLabel: 'Következő év',
        previousMonthLabel: 'Előző hónap',
        nextMonthLabel: 'Következő hónap',
        weekColumnLabel: 'Naptári hét',
        dateSelectedLabel: 'Kiválasztott dátum',
        todayLabel: 'Ma',
        rangeStartLabel: 'Tartomány kezdete',
        rangeEndLabel: 'Tartomány vége',
        dayInPastLabel: 'Múltbeli napok',
        closeCalendarLabel: 'Naptár bezárása',
        calendarDayViewDescription: 'Naptár',
        calendarMonthViewDescription: 'Hónapválasztó',
        calendarYearsViewDescription: 'Évválasztó',
        calendarYearsRangeViewDescription: 'Évtartomány-választó'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Összes kiválasztása ({{selectedItems}} / {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Ugrás az előző elemre',
        rightNavigationBtnLabel: 'Ugrás a következő elemre'
    },
    coreDatePicker: {
        dateInputLabel: 'Dátum bevitele',
        dateRangeInputLabel: 'Dátumtartomány bevitele',
        displayCalendarToggleLabel: 'Választó megnyitása',
        valueStateSuccessMessage: 'Értékállapot – sikeres',
        valueStateInformationMessage: 'Értékállapot – információ',
        valueStateWarningMessage: 'Értékállapot – figyelmeztetés',
        valueStateErrorMessage: 'Értékállapot – hiba'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Dátum/idő bevitele',
        displayDatetimeToggleLabel: 'Naptár megjelenítésének be-/kikapcsolója',
        displayTypeDateLabel: 'Dátum',
        displayTypeTimeLabel: 'Időpont',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'Mégse'
    },
    coreFeedListItem: { moreLabel: 'További {{count}}', lessLabel: 'Kevesebb' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Mégse',
        listItemStatusAriaLabel: 'Az elemnek van állapota. Állapot: {{status}}.',
        listItemCounterAriaLabel: 'Az elemnek {{count}} alárendelt eleme van.',
        listItemButtonDetailsTitle: 'Részletek',
        listItemButtonDeleteTitle: 'Törlés',
        listItemStatusContainsErrors: 'Hibákat tartalmaz',
        listItemStatusLocked: 'Zárolva',
        listItemStatusDraft: 'Vázlat'
    },
    coreMessageStrip: { dismissLabel: 'Elvetés' },
    coreMultiInput: {
        multiInputAriaLabel: 'Többértékes bevitel',
        noResults: 'Nincs eredmény.',
        navigateSelectionsWithArrows: 'A le és a fel nyíllal navigálhat a kiválasztott elemek között.',
        countListResultsSingular: '1 listaelemet kapott eredményül.',
        countListResultsPlural: '{{count}} listaelemet kapott eredményül.',
        escapeNavigateTokens:
            'Az Esc billentyű lenyomásával léphet ki a beviteli mezőből, a jobb és a bal nyílbillentyűt lenyomva navigálhat a kiválasztott lehetőségek között.',
        tokensCountText: (params) => {
            return `${(() => {
                if (params['length'] == 0) {
                    return `no token`;
                }
                if (params['length'] == 1) {
                    return `1 token`;
                } else {
                    return `${params['length']} tokens`;
                }
            })()} tokent tartalmaz.`;
        }
    },
    coreNavigation: { mainNavigation: 'Fő navigáció', navigationPath: 'Navigációs útvonal' },
    coreNestedList: {
        linkItemAriaLabel:
            '{{itemDetails}} struktúraelem, indexszáma {{index}} a(z) {{total}}{{selectedDescription}} elemből'
    },
    coreOverflowLayout: { moreItemsButton: 'További {{count}}' },
    corePagination: {
        pageLabel: '{{pageNumber}}. oldal',
        currentPageAriaLabel: 'A(z) {{pageNumber}}. a jelenlegi oldal',
        labelBeforeInputMobile: 'Oldal:',
        labelAfterInputMobile: '/ {{totalCount}}',
        inputAriaLabel: 'Oldalbevitel, jelenlegi oldal, {{pageNumber}} / {{totalCount}} oldal',
        itemsPerPageLabel: 'Találatok száma oldalanként:',
        firstLabel: 'Első',
        previousLabel: 'Előző',
        nextLabel: 'Következő',
        lastLabel: 'Utolsó',
        ariaLabel: 'Oldalakra tördelés',
        totalResultsLabel: '{{totalCount}} találat'
    },
    coreProductSwitch: { ariaLabel: 'Termékváltás' },
    coreShellbar: { collapsedItemMenuLabel: 'Összecsukott menüelem', cancel: 'Mégse', search: 'Keresés' },
    coreSlider: {
        singleMinMaxDetails: 'A csúszka minimális értéke {{min}}, maximális értéke {{max}}',
        singleValueminDetails: 'Az értéke {{value}}',
        singleValuemaxDetails: 'Az értéke {{value}}',
        singleValueNowDetails: 'A jelenlegi érték {{value}}',
        multipleHandle1MinMaxDetails: 'A tartománycsúszka minimális értéke {{min}}, maximális értéke {{max}}',
        multipleHandle1ValueminDetails: 'Az értéke {{value}}',
        multipleHandle1ValuemaxDetails: 'Az értéke {{value}}',
        multipleHandle1ValueNowDetails: 'A jelenlegi érték {{value}}',
        multipleHandle2MinMaxDetails: 'A tartománycsúszka minimális értéke {{min}}, maximális értéke {{max}}',
        multipleHandle2ValueminDetails: 'Az értéke {{value}}',
        multipleHandle2ValuemaxDetails: 'Az értéke {{value}}',
        multipleHandle2ValueNowDetails: 'A jelenlegi érték {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'További műveletek', arialLabel: 'Felosztott gomb' },
    coreSplitter: { paginationItemAriaLabel: 'Szakasz' },
    coreStepInput: {
        incrementButtonTitle: 'Növelés',
        decrementButtonTitle: 'Csökkentés',
        ariaRoleDescription: 'Lépés bevitele'
    },
    coreSwitch: { semanticAcceptLabel: 'Elfogadás', semanticDeclineLabel: 'Elutasítás' },
    coreTabs: { tabListExpandButtonText: 'Továbbiak' },
    coreText: { moreLabel: 'Több', lessLabel: 'Kevesebb' },
    coreTime: {
        componentAriaName: 'Időpontválasztó',
        increaseHoursLabel: 'Órák értékének növelése',
        hrsLabel: 'óra',
        decreaseHoursLabel: 'Órák értékének csökkentése',
        increaseMinutesLabel: 'Percek értékének növelése',
        minLabel: 'perc',
        decreaseMinutesLabel: 'Percek értékének csökkentése',
        increaseSecondsLabel: 'Másodpercek értékének növelése',
        secLabel: 'mp.',
        hoursLabel: 'óra',
        minutesLabel: 'perc',
        secondsLabel: 'másodperc',
        decreaseSecondsLabel: 'Másodpercek értékének csökkentése',
        increasePeriodLabel: 'Időszak értékének növelése',
        periodLabel: 'Időszak',
        decreasePeriodLabel: 'Időszak értékének csökkentése',
        navigationInstruction:
            'A le és a fel nyíllal navigálhat a lista elemei között. A jobb és a bal nyíllal válthat a listák között.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'Időpontválasztó szerinti bevitel',
        timePickerButtonLabel: 'Választó megnyitása'
    },
    coreToken: { deleteButtonLabel: 'Törölhető', ariaRoleDescription: 'token' },
    coreTokenizer: { moreLabel: 'További {{count}}', tokenizerLabel: 'Tokenizáló' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'Mégse',
        menuEditAriaLabel: 'Szerkesztés',
        menuDeleteAriaLabel: 'Törlés',
        menuOkAriaLabel: 'Szerkesztés',
        menuCancelAriaLabel: 'Mégse',
        formItemPlaceholder: 'Fájlnév'
    },
    coreWizard: { ariaLabel: 'Varázsló' },
    coreBreadcrumb: { overflowTitleMore: 'Továbbiak' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Csomópont hozzáadása',
        nodeMenuButtonTitle: 'Menü',
        defaultWatchersLabel: 'Megfigyelők',
        defaultTitle: 'Jóváhagyási folyamat',
        nextButtonAriaLabel: 'Tovább a következő diára',
        prevButtonAriaLabel: 'Vissza az előző diára',
        editModeSaveButtonLabel: 'Mentés',
        editModeExitButtonLabel: 'Kilépés',
        emptyTitle: 'Kezdje meg a jóváhagyók és megfigyelők hozzáadását',
        emptyHint:
            'Jóváhagyók hozzáadásához kattintson a „Lépés hozzáadása” lehetőségre. Megfigyelők hozzáadásához kattintson a „Megfigyelők” mezőre.',
        addNodeDialogHeaderAddApprovers: 'Jóváhagyók hozzáadása',
        addNodeDialogHeaderEditApprover: 'Jóváhagyó szerkesztése',
        addNodeDialogHeaderAddApproverTeam: 'Felhasználó/csapat',
        addNodeDialogHeaderDetail: 'Részlet',
        addNodeDialogNodeType: 'Párhuzamos vagy egymást követő',
        addNodeDialogNodeTypeSerial: 'Egymást követő',
        addNodeDialogNodeTypeParallel: 'Párhuzamos',
        addNodeDialogApproverType: 'Jóváhagyó típusa',
        addNodeDialogApproverTypeUser: 'Egy felhasználó',
        addNodeDialogApproverTypeTeamAnyone: 'A csapatból bárki',
        addNodeDialogApproverTypeTeamEveryone: 'A csapat minden tagja',
        addNodeDialogUserOrTeam: 'Felhasználó/csapat',
        addNodeDialogAddToNext: 'Hozzáadás a sorban következő csomóponthoz',
        addNodeDialogDueDate: 'Határidő',
        addNodeSearchPlaceholder: 'Keresés',
        addNodeAddActionBtnLabel: 'Hozzáadás',
        addNodeCancelActionBtnLabel: 'Mégse',
        addNodeSelectApproverActionBtnLabel: 'Kiválasztás',
        addNodeCancelApproverSelectionActionBtnLabel: 'Mégse',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Bezárás',
        userDetailsHeader: 'Részlet',
        userDetailsSendReminderBtnLabel: 'Emlékeztető küldése',
        userDetailsCancelBtnLabel: 'Mégse',
        messagesApproverAddedSuccess: '1 jóváhagyó hozzá lett adva',
        messagesTeamAddedSuccess: '1 csapat hozzá lett adva',
        messagesNodeEdited: '1 jóváhagyó módosítva lett',
        messagesNodeRemovedSingular: '1 jóváhagyó el lett távolítva',
        messagesNodeRemovedPlural: 'A jóváhagyók el lettek távolítva',
        messagesTeamRemoved: '1 csapat el lett távolítva',
        messagesErrorBuildGraph: 'Hiba történt a diagram összeállításakor. Ellenőrizze a kiindulási adatokat.',
        messagesUndoAction: 'Visszavonás',
        nodeMembersCount: '{{count}} tag',
        nodeVariousTeams: 'Különböző csapatok',
        nodeStatusDueToday: 'Ma esedékes',
        nodeStatusDueInXDays: '{{count}} napon belül esedékes',
        nodeStatusXDaysOverdue: '{{count}} napja késedelmes',
        nodeActionAddApproversBefore: 'Jóváhagyók hozzáadása ez elé:',
        nodeActionAddApproversAfter: 'Jóváhagyók hozzáadása ez után:',
        nodeActionAddApproversParallel: 'Párhuzamos jóváhagyók hozzáadása',
        nodeActionEditApprover: 'Jóváhagyó szerkesztése',
        nodeActionRemove: 'Eltávolítás',
        selectTypeDialogMoveApproverAs: 'Jóváhagyó áthelyezése mint',
        selectTypeDialogParallelOrSerial: 'Párhuzamos vagy egymást követő',
        selectTypeDialogNodeTypeParallel: 'Párhuzamos jóváhagyó',
        selectTypeDialogNodeTypeSerial: 'Egymást követő jóváhagyó',
        selectTypeDialogConfirmButton: 'Megerősítés',
        selectTypeDialogCancelButton: 'Mégse',
        toolbarAddStepButton: 'Lépés hozzáadása',
        toolbarEditButton: 'Szerkesztés',
        toolbarAddApproversBefore: 'Jóváhagyók hozzáadása ez elé:',
        toolbarAddApproversAfter: 'Jóváhagyók hozzáadása ez után:',
        toolbarAddApproversParallel: 'Párhuzamos jóváhagyók hozzáadása',
        toolbarRemove: 'Eltávolítás',
        toolbarEditApprover: 'Jóváhagyó szerkesztése',
        watchersInputPlaceholder: 'Itt kereshet...',
        userListSelectedItemsCountSingular: '1 elem kiválasztva',
        userListSelectedItemsCountPlural: '{{count}} elem kiválasztva',
        statusApproved: 'jóváhagyva',
        statusRejected: 'elutasítva',
        statusInProgress: 'folyamatban',
        statusNotStarted: 'nincs elindítva'
    },
    platformFeedInput: { userTitle: 'Felhasználó' },
    platformVHD: {
        selectionBarLabel: 'Kiválasztott elemek és feltételek',
        selectedAndConditionLabel: 'Kiválasztott elemek és feltételek',
        footerClearSelectedTitle: 'a kiválasztott elemek törlése',
        footerClearSelectedAriaLabel: 'a kiválasztott elemek törlése',
        searchButtonLabel: 'Indítás',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Mégse',
        selectedEmptyLabel: 'Nincs kiválasztott elem vagy feltétel',
        searchPlaceholder: 'Keresés',
        searchAdvancedSearchLabel: 'Szűrők',
        searchShowAdvancedSearchLabel: 'Szűrők megjelenítése',
        searchHideAdvancedSearchLabel: 'Szűrők elrejtése',
        searchShowAllAdvancedSearchLabel: 'Minden szűrő megjelenítése',
        searchHideAllAdvancedSearchLabel: 'Minden szűrő elrejtése',
        selectTabDisplayCountLabel: 'Elemek ({{count}})',
        selectTabMoreBtnLabel: 'Továbbiak',
        selectTabCountHiddenA11yLabel: '{{rowCount}} sort és {{colCount}} oszlopot tartalmaz',
        selectMobileTabBackBtnTitle: 'Vissza',
        selectMobileTabBtnOpenDialogLabel: 'Párbeszédpanel megnyitása',
        selectMobileTabTitle: '„{{title}}” lap',
        selectMobileConditionEmpty: 'Üres',
        defineConditionTitle: 'Termék',
        defineConditionSelectedValueHiddenA11yLabel: 'kiválasztott érték {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Beleszámítás',
        defineConditionConditionsGroupHeaderExclude: 'Kizárás',
        defineConditionFromPlaceholder: 'ettől:',
        defineConditionToPlaceholder: 'eddig:',
        defineConditionValuePlaceholder: 'érték',
        defineConditionRemoveConditionButtonTitle: 'Feltétel eltávolítása',
        defineConditionAddConditionButtonLabel: 'Hozzáadás',
        defineConditionAddConditionButtonTitle: 'Feltétel hozzáadása',
        defineConditionConditionStrategyLabelContains: 'tartalmazza:',
        defineConditionConditionStrategyLabelEqualTo: 'egyenlő ezzel:',
        defineConditionConditionStrategyLabelBetween: 'ezek között:',
        defineConditionConditionStrategyLabelStartsWith: 'ezzel kezdődik:',
        defineConditionConditionStrategyLabelEndsWith: 'erre végződik:',
        defineConditionConditionStrategyLabelLessThan: 'kisebb, mint',
        defineConditionConditionStrategyLabelLessThanEqual: 'legfeljebb',
        defineConditionConditionStrategyLabelGreaterThan: 'nagyobb, mint',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'legalább',
        defineConditionConditionStrategyLabelEmpty: 'üres',
        defineConditionConditionStrategyLabelNotEqualTo: 'nem egyenlő ezzel:',
        defineConditionConditionStrategyLabelNotEmpty: 'nem üres',
        defineConditionMaxCountError: 'Legfeljebb {{count}} karakterből álló értéket adjon meg',
        selectTabTitle: 'Válasszon a listáról',
        searchTableEmptyMessage: 'Eredményekhez használja a keresést',
        defineTabTitle: 'Feltételek meghatározása'
    },
    platformCombobox: {
        countListResultsSingular: '1 listaelemet kapott eredményül',
        countListResultsPlural: '{{count}} listaelemet kapott eredményül'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Kiválasztási beállítások',
        inputIconTitle: 'Kiválasztási beállítások',
        mobileShowAllItemsButton: 'Minden elem megjelenítése',
        mobileShowSelectedItemsButton: 'A kiválasztott elemek megjelenítése'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 karakterrel több a megengedettnél',
        counterMessageCharactersOverTheLimitPlural: '{{count}} karakterrel több a megengedettnél',
        counterMessageCharactersRemainingSingular: 'Még 1 karakter írható be',
        counterMessageCharactersRemainingPlural: 'Még {{count}} karakter írható be'
    },
    platformLink: { roleDescriptionWithMedia: 'Média: {{media}}' },
    platformList: { loadingAriaLabel: 'betöltés' },
    platformObjectListItem: { detailsActionAriaLabel: 'részlet', deleteActionAriaLabel: 'törlés' },
    platformStandardListItem: { detailsActionAriaLabel: 'részlet', deleteActionAriaLabel: 'törlés' },
    platformSearchField: {
        clearButtonTitle: 'Törlés',
        submitButtonTitle: 'Keresés',
        searchInputLabel: 'Keresés',
        synchronizeButtonTitle: 'Szinkronizálás',
        searchSuggestionMessage: '{{count}} javaslat található.',
        searchSuggestionNavigateMessage: 'a le és a fel nyíllal navigálhat'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Keresés',
        submitButtonLabel: 'Mehet',
        filtersButtonLabel: 'Szűrők ({{filtersCount}})',
        showFiltersButtonLabel: 'Szűrők megjelenítése',
        hideFiltersButtonLabel: 'Szűrők elrejtése',
        defineConditionsRemoveConditionButtonTitle: 'Feltétel eltávolítása',
        defineConditionsAddConditionButtonLabel: 'Feltétel hozzáadása',
        defineConditionsSubmitButtonLabel: 'Mehet',
        defineConditionsCancelButton: 'Mégse',
        selectFiltersHeader: 'Szűrők',
        selectFiltersAvailableFiltersText: 'Elérhető szűrők',
        selectFiltersFilterColumnLabel: 'Szűrő',
        selectFiltersActiveColumnLabel: 'Aktív',
        selectFiltersSubmitButtonLabel: 'Mehet',
        selectFiltersCancelButton: 'Mégse',
        filterConditionContains: 'tartalmazza:',
        filterConditionEqualTo: 'egyenlő ezzel:',
        filterConditionBetween: 'ezek között:',
        filterConditionBeginsWith: 'ezzel kezdődik:',
        filterConditionEndsWith: 'erre végződik:',
        filterConditionLessThan: 'kisebb, mint',
        filterConditionLessThanOrEqualTo: 'legfeljebb',
        filterConditionGreaterThan: 'nagyobb, mint',
        filterConditionGreaterThanOrEqualTo: 'legalább',
        filterConditionAfter: 'ez után:',
        filterConditionOnOrAfter: 'ekkor vagy ezt követően:',
        filterConditionBefore: 'ez előtt:',
        filterConditionBeforeOrOn: 'ez előtt vagy ekkor:',
        filterConditionValuePlaceholder: 'érték',
        filterConditionValueFromPlaceholder: 'ettől:',
        filterConditionValueToPlaceholder: 'eddig:',
        settingsCategoryAll: 'Összes',
        settingsCategoryVisible: 'Látható',
        settingsCategoryActive: 'Aktív',
        settingsCategoryVisibleAndActive: 'Látható és aktív',
        settingsCategoryMandatory: 'Kötelező',
        manageFieldConditions: 'Mezőfeltételek kezelése',
        refreshButtonAriaLabel: 'Frissítés'
    },
    platformTable: {
        headerMenuSortAsc: 'Rendezés növekvő sorrendben',
        headerMenuSortDesc: 'Rendezés csökkenő sorrendben',
        headerMenuGroup: 'Csoport',
        headerMenuFreeze: 'Rögzítés',
        headerMenuEndFreeze: 'Rögzítés a végéig',
        headerMenuUnfreeze: 'Rögzítés feloldása',
        headerMenuFilter: 'Szűrő',
        defaultEmptyMessage: 'Nem található adat',
        emptyCell: 'Üres',
        noVisibleColumnsMessage:
            'Jelenleg nincs látható oszlop a táblában. Válassza ki a kívánt oszlopokat a táblabeállításokban.',
        resetChangesButtonLabel: 'Alaphelyzetbe állítás',
        editableCellNumberPlaceholder: 'Adjon meg értéket',
        editableCellDatePlaceholder: 'Adjon meg értéket',
        editableCellStringPlaceholder: 'Adjon meg értéket',
        P13ColumnsDialogHeader: 'Oszlopok',
        P13ColumnsDialogSearchPlaceholder: 'Keresés',
        P13ColumnsDialogsShowSelected: 'Kijelöltek megjelenítése',
        P13ColumnsDialogShowAll: 'Összes megjelenítése',
        P13ColumnsDialogSelectAll: 'Összes kiválasztása ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Mégse',
        P13ColumnsDialogMoveToTopBtn: 'Legfelülre',
        P13ColumnsDialogMoveUpBtn: 'Feljebb',
        P13ColumnsDialogMoveDownBtn: 'Lejjebb',
        P13ColumnsDialogMoveToBottomBtn: 'Legalulra',
        P13FilterStrategyLabelBetween: 'ezek között:',
        P13FilterStrategyLabelContains: 'tartalmazza:',
        P13FilterStrategyLabelBeginsWith: 'ezzel kezdődik:',
        P13FilterStrategyLabelEndsWith: 'erre végződik:',
        P13FilterStrategyLabelEqualTo: 'egyenlő ezzel:',
        P13FilterStrategyLabelGreaterThan: 'nagyobb, mint:',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'legalább:',
        P13FilterStrategyLabelLessThan: 'kisebb, mint:',
        P13FilterStrategyLabelLessThanOrEqualTo: 'legfeljebb:',
        P13FilterStrategyLabelAfter: 'ez után:',
        P13FilterStrategyLabelOnOrAfter: 'ekkor vagy ezt követően:',
        P13FilterStrategyLabelBefore: 'ez előtt:',
        P13FilterStrategyLabelBeforeOrOn: 'ez előtt vagy ekkor:',
        P13FilterStrategyLabelNotDefined: 'Nincs megadva',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Igen',
        P13FilterBooleanOptionFalse: 'Nem',
        P13FilterDialogHeader: 'Szűrés alapja:',
        P13FilterDialogIncludePanelTitleWithCount: 'Beleszámítás ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Beleszámítás',
        P13FilterDialogExcludePanelTitleWithCount: 'Kizárás ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Kizárás',
        P13FilterDialogRemoveFilterBtnTitle: 'Szűrő eltávolítása',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Mégse',
        P13GroupDialogHeader: 'Csoport',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(nincs)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Mező megjelenítése oszlopként',
        P13GroupDialogRemoveGroupBtnTitle: 'Eltávolítás',
        P13GroupDialogAddNewGroupBtnTitle: 'Új hozzáadása',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Mégse',
        P13SortDialogHeader: 'Rendezés',
        P13SortDialogNoneSelectedColumn: '(nincs)',
        P13SortDialogNoneSelectedSorting: '(nincs)',
        P13SortDialogSortOrderSelectOptionAsc: 'Növekvő',
        P13SortDialogSortOrderSelectOptionDesc: 'Csökkenő',
        P13SortDialogRemoveSortBtnTitle: 'Eltávolítás',
        P13SortDialogAddNewSortBtnTitle: 'Új hozzáadása',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Mégse',
        toolbarSearchPlaceholder: 'Keresés',
        toolbarActionCreateButtonLabel: 'Létrehozás',
        toolbarActionSaveButtonLabel: 'Mentés',
        toolbarActionCancelButtonLabel: 'Mégse',
        toolbarActionSortButtonTitle: 'Rendezés',
        toolbarActionFilterButtonTitle: 'Szűrés',
        toolbarActionGroupButtonTitle: 'Csoport',
        toolbarActionColumnsButtonTitle: 'Oszlopok',
        toolbarActionExpandAllButtonTitle: 'Összes kibontása',
        toolbarActionCollapseAllButtonTitle: 'Összes visszazárása',
        filterDialogNotFilteredLabel: '(Nincs szűrve)',
        filterDialogFilterByLabel: 'Szűrés alapja: {{filterLabel}}',
        filterDialogFilterTitle: 'Szűrő',
        filterDialogFilterBy: 'Szűrés alapja',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Mégse',
        groupDialogHeader: 'Csoport',
        groupDialogGroupOrderHeader: 'Csoportosítási sorrend',
        groupDialogGroupOrderAsc: 'Növekvő',
        groupDialogGroupOrderDesc: 'Csökkenő',
        groupDialogGroupByHeader: 'Csoportosítási szempont:',
        groupDialogNotGroupedLabel: '(Nincs csoportosítva)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Mégse',
        sortDialogHeader: 'Rendezés',
        sortDialogSortOrderHeader: 'Rendezési sorrend',
        sortDialogSortOrderAsc: 'Növekvő',
        sortDialogSortOrderDesc: 'Csökkenő',
        sortDialogSortByHeader: 'Rendezés alapja',
        sortDialogNotSortedLabel: '(Nincs rendezve)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Mégse',
        selectAllCheckboxLabel: 'Összes kiválasztása',
        deselectAllCheckboxLabel: 'Összes kijelölésének megszüntetése',
        deselectSingleRow: 'A sor kijelölésének megszüntetéséhez nyomja meg a „szóköz” billentyűt',
        selectSingleRow: 'A sor kijelöléséhez nyomja meg a „szóköz” billentyűt'
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
    platformWizardGenerator: { summarySectionEditStep: 'Szerkesztés' },
    platformMessagePopover: {
        allErrors: 'Összes',
        defaultErrors: {
            email: 'Az e-mail-cím érvénytelen',
            max: 'A mező értéke nagyobb a megengedett maximális értéknél',
            maxLength: 'A mező hossza nagyobb a megengedett maximális hosszúságnál',
            min: 'A mező értéke kisebb a megengedett minimális értéknél',
            minLength: 'A mező hossza kisebb a megengedett minimális hosszúságnál',
            pattern: 'A mezőben szereplő érték érvénytelen',
            required: 'Ez a mező kötelezően kitöltendő',
            requiredTrue: 'Ez a mező kötelezően kitöltendő'
        }
    },
    platformVariantManagement: {
        manage: 'Kezelés',
        saveAs: 'Mentés másként',
        saveView: 'Nézet mentése',
        save: 'Mentés',
        myViews: 'Saját nézetek',
        view: 'Megtekintés',
        setAsDefault: 'Beállítás alapértelmezettként',
        public: 'Nyilvános',
        applyAutomatically: 'Automatikus alkalmazás',
        requiredFieldError: 'Ez a mező kötelező.',
        nameTakenFieldError: 'Már van ilyen nevű változat. Válasszon más nevet.',
        cancel: 'Mégse',
        manageViews: 'Nézetek kezelése',
        markAsFavourite: 'Megjelölés kedvencként',
        sharing: 'Megosztás',
        default: 'Alapértelmezett',
        createdBy: 'Létrehozó',
        removeVariant: 'Nézet eltávolítása',
        search: 'Keresés',
        access: { public: 'Nyilvános', private: 'Privát' }
    },
    platformSelect: { selectOptionLabel: 'Válasszon a lehetőségek közül' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'Csomópont kibontása', collapse: 'Csomópont visszazárása', noData: 'Nincs adat' }
};
