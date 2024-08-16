/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_DANISH: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Vælg år',
        yearsRangeSelectionLabel: 'Vælg årsinterval',
        monthSelectionLabel: 'Vælg måned',
        dateSelectionLabel: 'Vælg dato',
        previousYearLabel: 'Forrige år',
        nextYearLabel: 'Næste år',
        previousMonthLabel: 'Forrige måned',
        nextMonthLabel: 'Næste måned',
        weekColumnLabel: 'Kalenderuge',
        dateSelectedLabel: 'Valgt dato',
        todayLabel: 'I dag',
        rangeStartLabel: 'Intervalstart',
        rangeEndLabel: 'Intervalslut',
        dayInPastLabel: 'Dage i fortiden',
        closeCalendarLabel: 'Luk kalender',
        calendarDayViewDescription: 'Kalender',
        calendarMonthViewDescription: 'Månedsvælger',
        calendarYearsViewDescription: 'Årsvælger',
        calendarYearsRangeViewDescription: 'Vælger af årsinterval'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Vælg alle ({{selectedItems}} ud af {{totalItems}})'
    },
    coreCarousel: { leftNavigationBtnLabel: 'Gå til forrige element', rightNavigationBtnLabel: 'Gå til næste element' },
    coreDatePicker: {
        dateInputLabel: 'Datoinput',
        dateRangeInputLabel: 'Datoområdeinput',
        displayCalendarToggleLabel: 'Åbn vælger',
        valueStateSuccessMessage: 'Værditilstand Lykkedes',
        valueStateInformationMessage: 'Værditilstand Oplysninger',
        valueStateWarningMessage: 'Værditilstand Advarsel',
        valueStateErrorMessage: 'Værditilstand Fejl'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Dato-/tidsinput',
        displayDatetimeToggleLabel: 'Vis Til/fra-knap for kalender',
        displayTypeDateLabel: 'Dato',
        displayTypeTimeLabel: 'Klokkeslæt',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'Annuller'
    },
    coreDynamicPage: {
        expandLabel: 'Udvid overskrift',
        collapseLabel: 'Skjul overskrift',
        pinLabel: 'Fastgør overskrift',
        unpinLabel: 'Frigør overskrift'
    },
    coreFeedListItem: { moreLabel: '{{count}} mere', lessLabel: 'Mindre' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Annuller',
        listItemStatusAriaLabel: 'Element har status. Status: {{status}}.',
        listItemCounterAriaLabel: 'Element har {{count}} underordnede.',
        listItemButtonDetailsTitle: 'Detaljer',
        listItemButtonDeleteTitle: 'Slet',
        listItemStatusContainsErrors: 'Indeholder fejl',
        listItemStatusLocked: 'Låst',
        listItemStatusDraft: 'Udkast'
    },
    coreMessageStrip: { dismissLabel: 'Afvis' },
    coreMultiInput: {
        multiInputAriaLabel: 'Input med flere værdier',
        noResults: 'Ingen resultater.',
        navigateSelectionsWithArrows: 'Naviger i valgene med pil op og pil ned.',
        countListResultsSingular: '1 resultatlisteelement.',
        countListResultsPlural: '{{count}} resultatlisteelementer.',
        escapeNavigateTokens:
            'Tryk på Escape for at afslutte inputfeltet, og brug venstre og højre piletast til at navigere gennem de valgte muligheder.',
        tokensCountText: (params) => {
            return `Contains ${(() => {
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
    coreNavigation: { mainNavigation: 'Hovednavigation', navigationPath: 'Navigationssti' },
    coreNestedList: { linkItemAriaLabel: 'Træelement {{itemDetails}}, {{index}} af {{total}}{{selectedDescription}}' },
    coreOverflowLayout: { moreItemsButton: '{{count}} mere' },
    corePagination: {
        pageLabel: 'Side {{pageNumber}}',
        currentPageAriaLabel: 'Side {{pageNumber}} er den aktuelle side',
        labelBeforeInputMobile: 'Side:',
        labelAfterInputMobile: 'af {{totalCount}}',
        inputAriaLabel: 'Sideinput, Aktuel side, Side {{pageNumber}} af {{totalCount}}',
        itemsPerPageLabel: 'Resultater pr. side:',
        firstLabel: 'Første',
        previousLabel: 'Forrige',
        nextLabel: 'Næste',
        lastLabel: 'Sidste',
        ariaLabel: 'Sideinddeling',
        totalResultsLabel: '{{totalCount}} Resultater'
    },
    coreProductSwitch: { ariaLabel: 'Produktskift' },
    coreShellbar: { collapsedItemMenuLabel: 'Minimeret elementmenu', cancel: 'Annuller', search: 'Søg' },
    coreSlider: {
        singleMinMaxDetails: 'Skyderens minimumsværdi er {{min}}, maksimumsværdi er {{max}}',
        singleValueminDetails: 'Værdi er {{value}}',
        singleValuemaxDetails: 'Værdi er {{value}}',
        singleValueNowDetails: 'Aktuel værdi er {{value}}',
        multipleHandle1MinMaxDetails: 'Intervalskyderens minimumsværdi er {{min}}, maksimumsværdi er {{max}}',
        multipleHandle1ValueminDetails: 'Værdi er {{value}}',
        multipleHandle1ValuemaxDetails: 'Værdi er {{value}}',
        multipleHandle1ValueNowDetails: 'Aktuel værdi er {{value}}',
        multipleHandle2MinMaxDetails: 'Intervalskyderens minimumsværdi er {{min}}, maksimumsværdi er {{max}}',
        multipleHandle2ValueminDetails: 'Værdi er {{value}}',
        multipleHandle2ValuemaxDetails: 'Værdi er {{value}}',
        multipleHandle2ValueNowDetails: 'Aktuel værdi er {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'Flere handlinger', arialLabel: 'Opdelt trykknap' },
    coreSplitter: { paginationItemAriaLabel: 'Afsnit' },
    coreStepInput: {
        incrementButtonTitle: 'Stigning',
        decrementButtonTitle: 'Reducering',
        ariaRoleDescription: 'Trininput'
    },
    coreSwitch: { semanticAcceptLabel: 'Acceptér', semanticDeclineLabel: 'Afvis' },
    coreTabs: { tabListExpandButtonText: 'Flere' },
    coreText: { moreLabel: 'Mere', lessLabel: 'Mindre' },
    coreTime: {
        componentAriaName: 'Tidsvælger',
        increaseHoursLabel: 'Øg antal timer',
        hrsLabel: 'Timer',
        decreaseHoursLabel: 'Reducer antal timer',
        increaseMinutesLabel: 'Øg antal minutter',
        minLabel: 'Min',
        decreaseMinutesLabel: 'Reducer antal minutter',
        increaseSecondsLabel: 'Øg antal sekunder',
        secLabel: 'Sek.',
        hoursLabel: 'Timer',
        minutesLabel: 'Minutter',
        secondsLabel: 'Sekunder',
        decreaseSecondsLabel: 'Reducer antal sekunder',
        increasePeriodLabel: 'Øg periode',
        periodLabel: 'Periode',
        decreasePeriodLabel: 'Reducer periode',
        navigationInstruction:
            'Tryk på pil op eller pil ned for at bevæge dig mellem elementer i denne liste. Tryk på venstre piletast eller højre piletast for at skifte mellem lister.'
    },
    coreTimePicker: { timePickerInputLabel: 'Input for tidsvælger', timePickerButtonLabel: 'Åbn vælger' },
    coreToken: { deleteButtonLabel: 'Kan slettes', ariaRoleDescription: 'token' },
    coreTokenizer: { moreLabel: '{{count}} flere', tokenizerLabel: 'Tokenizer' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'Annuller',
        menuEditAriaLabel: 'Rediger',
        menuDeleteAriaLabel: 'Slet',
        menuOkAriaLabel: 'Rediger',
        menuCancelAriaLabel: 'Annuller',
        formItemPlaceholder: 'Filnavn'
    },
    coreWizard: { ariaLabel: 'Guide' },
    coreBreadcrumb: { overflowTitleMore: 'Flere' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Tilføj node',
        nodeMenuButtonTitle: 'Menu',
        defaultWatchersLabel: 'Observatører',
        defaultTitle: 'Godkendelsesproces',
        nextButtonAriaLabel: 'Gå til næste dias',
        prevButtonAriaLabel: 'Gå til forrige dias',
        editModeSaveButtonLabel: 'Gem',
        editModeExitButtonLabel: 'Afslut',
        emptyTitle: 'Begynd at tilføje godkendere og observatører',
        emptyHint:
            'Klik på "Tilføj et trin" for at tilføje godkendere. Klik på feltet Observatører for at tilføje observatører.',
        addNodeDialogHeaderAddApprovers: 'Tilføj godkendere',
        addNodeDialogHeaderEditApprover: 'Rediger godkender',
        addNodeDialogHeaderAddApproverTeam: 'Bruger/team',
        addNodeDialogHeaderDetail: 'Detalje',
        addNodeDialogNodeType: 'Parallel eller seriel',
        addNodeDialogNodeTypeSerial: 'Seriel',
        addNodeDialogNodeTypeParallel: 'Parallel',
        addNodeDialogApproverType: 'Godkendertype',
        addNodeDialogApproverTypeUser: 'En bruger',
        addNodeDialogApproverTypeTeamAnyone: 'Enhver i teamet',
        addNodeDialogApproverTypeTeamEveryone: 'Alle i teamet',
        addNodeDialogUserOrTeam: 'Bruger/team',
        addNodeDialogAddToNext: 'Føj til den næste, serielle node',
        addNodeDialogDueDate: 'Forfaldsdato',
        addNodeSearchPlaceholder: 'Søg',
        addNodeAddActionBtnLabel: 'Tilføj',
        addNodeCancelActionBtnLabel: 'Annuller',
        addNodeSelectApproverActionBtnLabel: 'Vælg',
        addNodeCancelApproverSelectionActionBtnLabel: 'Annuller',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Luk',
        userDetailsHeader: 'Detalje',
        userDetailsSendReminderBtnLabel: 'Send påmindelse',
        userDetailsCancelBtnLabel: 'Annuller',
        messagesApproverAddedSuccess: '1 godkender er tilføjet',
        messagesTeamAddedSuccess: '1 team er tilføjet',
        messagesNodeEdited: '1 godkender er redigeret',
        messagesNodeRemovedSingular: '1 godkender er fjernet',
        messagesNodeRemovedPlural: 'Godkendere er fjernet',
        messagesTeamRemoved: '1 team er fjernet',
        messagesErrorBuildGraph: 'Der opstod en fejl under forsøget på at oprette grafen. Kontrollér startdataene.',
        messagesUndoAction: 'Fortryd',
        nodeMembersCount: '{{count}} medlemmer',
        nodeVariousTeams: 'Forskellige teams',
        nodeStatusDueToday: 'Forfalder i dag',
        nodeStatusDueInXDays: 'Forfalder om {{count}} dage',
        nodeStatusXDaysOverdue: '{{count}} dage over forfald',
        nodeActionAddApproversBefore: 'Tilføj godkendere før',
        nodeActionAddApproversAfter: 'Tilføj godkendere efter',
        nodeActionAddApproversParallel: 'Tilføj parallelle godkendere',
        nodeActionEditApprover: 'Rediger godkender',
        nodeActionRemove: 'Fjern',
        selectTypeDialogMoveApproverAs: 'Flyt godkender som',
        selectTypeDialogParallelOrSerial: 'Parallel eller seriel',
        selectTypeDialogNodeTypeParallel: 'Parallel godkender',
        selectTypeDialogNodeTypeSerial: 'Seriel godkender',
        selectTypeDialogConfirmButton: 'Bekræft',
        selectTypeDialogCancelButton: 'Annuller',
        toolbarAddStepButton: 'Tilføj et trin',
        toolbarEditButton: 'Rediger',
        toolbarAddApproversBefore: 'Tilføj godkendere før',
        toolbarAddApproversAfter: 'Tilføj godkendere efter',
        toolbarAddApproversParallel: 'Tilføj parallelle godkendere',
        toolbarRemove: 'Fjern',
        toolbarEditApprover: 'Rediger godkender',
        watchersInputPlaceholder: 'Søg her..',
        userListSelectedItemsCountSingular: '1 element valgt',
        userListSelectedItemsCountPlural: '{{count}} elementer valgt',
        statusApproved: 'godkendt',
        statusRejected: 'afvist',
        statusInProgress: 'under udførelse',
        statusNotStarted: 'ikke startet'
    },
    platformFeedInput: { userTitle: 'Bruger' },
    platformVHD: {
        selectedAndConditionLabel: 'Valgte elementer og betingelser',
        footerClearSelectedTitle: 'slet valgte elementer',
        footerClearSelectedAriaLabel: 'slet valgte elementer',
        searchButtonLabel: 'Udfør',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Annuller',
        selectedEmptyLabel: 'Ingen valgte elementer eller betingelser',
        searchPlaceholder: 'Søg',
        searchAdvancedSearchLabel: 'Filtre',
        searchShowAdvancedSearchLabel: 'Vis filtre',
        searchHideAdvancedSearchLabel: 'Skjul filtre',
        searchShowAllAdvancedSearchLabel: 'Vis alle filtre',
        searchHideAllAdvancedSearchLabel: 'Skjul alle filtre',
        selectTabDisplayCountLabel: 'Elementer ({{count}})',
        selectTabMoreBtnLabel: 'Mere',
        selectTabCountHiddenA11yLabel: 'indeholder {{rowCount}} rækker og {{colCount}} kolonner',
        selectMobileTabBackBtnTitle: 'Tilbage',
        selectMobileTabBtnOpenDialogLabel: 'Åbn dialogboks',
        selectMobileTabTitle: 'Fanen {{title}}',
        selectMobileConditionEmpty: 'Tom',
        defineConditionTitle: 'Produkt',
        defineConditionSelectedValueHiddenA11yLabel: 'valgt værdi {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Medtag',
        defineConditionConditionsGroupHeaderExclude: 'Udeluk',
        defineConditionFromPlaceholder: 'fra',
        defineConditionToPlaceholder: 'til',
        defineConditionValuePlaceholder: 'værdi',
        defineConditionRemoveConditionButtonTitle: 'Fjern betingelse',
        defineConditionAddConditionButtonLabel: 'Tilføj',
        defineConditionAddConditionButtonTitle: 'Tilføj betingelse',
        defineConditionConditionStrategyLabelContains: 'indeholder',
        defineConditionConditionStrategyLabelEqualTo: 'lig med',
        defineConditionConditionStrategyLabelBetween: 'mellem',
        defineConditionConditionStrategyLabelStartsWith: 'starter med',
        defineConditionConditionStrategyLabelEndsWith: 'slutter med',
        defineConditionConditionStrategyLabelLessThan: 'mindre end',
        defineConditionConditionStrategyLabelLessThanEqual: 'mindre end eller lig med',
        defineConditionConditionStrategyLabelGreaterThan: 'større end',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'større end eller lig med',
        defineConditionConditionStrategyLabelEmpty: 'tom',
        defineConditionConditionStrategyLabelNotEqualTo: 'ikke lig med',
        defineConditionConditionStrategyLabelNotEmpty: 'ikke tom',
        defineConditionMaxCountError: 'Indtast en værdi med maksimalt {{count}} tegn.',
        selectTabTitle: 'Vælg fra liste',
        searchTableEmptyMessage: 'Brug søgningen til at få resultater',
        defineTabTitle: 'Definer betingelser'
    },
    platformCombobox: {
        countListResultsSingular: '1 resultatlisteelement',
        countListResultsPlural: '{{count}} resultatlisteelementer'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Vælg muligheder',
        inputIconTitle: 'Vælg muligheder',
        mobileShowAllItemsButton: 'Vis alle elementer',
        mobileShowSelectedItemsButton: 'Vis valgte elementer'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 tegn over grænsen',
        counterMessageCharactersOverTheLimitPlural: '{{count}} tegn over grænsen',
        counterMessageCharactersRemainingSingular: '1 tegn tilbage',
        counterMessageCharactersRemainingPlural: '{{count}} tegn tilbage'
    },
    platformLink: { roleDescriptionWithMedia: 'Medier: {{media}}' },
    platformList: { loadingAriaLabel: 'indlæser' },
    platformObjectListItem: { detailsActionAriaLabel: 'detalje', deleteActionAriaLabel: 'slet' },
    platformStandardListItem: { detailsActionAriaLabel: 'detalje', deleteActionAriaLabel: 'slet' },
    platformSearchField: {
        clearButtonTitle: 'Ryd',
        submitButtonTitle: 'Søg',
        searchInputLabel: 'Søg',
        synchronizeButtonTitle: 'Synkroniser',
        searchSuggestionMessage: '{{count}} forslag blev fundet.',
        searchSuggestionNavigateMessage: 'brug pil op og pil ned til at navigere'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Søg',
        submitButtonLabel: 'Udfør',
        filtersButtonLabel: 'Filtre ({{filtersCount}})',
        showFiltersButtonLabel: 'Vis filtre',
        hideFiltersButtonLabel: 'Skjul filtre',
        defineConditionsRemoveConditionButtonTitle: 'Fjern betingelse',
        defineConditionsAddConditionButtonLabel: 'Tilføj betingelse',
        defineConditionsSubmitButtonLabel: 'Udfør',
        defineConditionsCancelButton: 'Annuller',
        selectFiltersHeader: 'Filtre',
        selectFiltersAvailableFiltersText: 'Tilgængelige filtre',
        selectFiltersFilterColumnLabel: 'Filter',
        selectFiltersActiveColumnLabel: 'Aktiv',
        selectFiltersSubmitButtonLabel: 'Udfør',
        selectFiltersCancelButton: 'Annuller',
        filterConditionContains: 'indeholder',
        filterConditionEqualTo: 'lig med',
        filterConditionBetween: 'mellem',
        filterConditionBeginsWith: 'starter med',
        filterConditionEndsWith: 'slutter med',
        filterConditionLessThan: 'mindre end',
        filterConditionLessThanOrEqualTo: 'mindre end eller lig med',
        filterConditionGreaterThan: 'større end',
        filterConditionGreaterThanOrEqualTo: 'større end eller lig med',
        filterConditionAfter: 'efter',
        filterConditionOnOrAfter: 'den eller efter',
        filterConditionBefore: 'før',
        filterConditionBeforeOrOn: 'inden eller den',
        filterConditionValuePlaceholder: 'værdi',
        filterConditionValueFromPlaceholder: 'fra',
        filterConditionValueToPlaceholder: 'til',
        settingsCategoryAll: 'Alle',
        settingsCategoryVisible: 'Synlige',
        settingsCategoryActive: 'Aktive',
        settingsCategoryVisibleAndActive: 'Synlige og aktive',
        settingsCategoryMandatory: 'Obligatoriske',
        manageFieldConditions: 'Administrer feltbetingelser',
        refreshButtonAriaLabel: 'Opdater'
    },
    platformTable: {
        headerMenuSortAsc: 'Sortér stigende',
        headerMenuSortDesc: 'Sortér faldende',
        headerMenuGroup: 'Gruppér',
        headerMenuFreeze: 'Freeze column',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Unfreeze column',
        headerMenuFreezePlural: 'Freeze columns',
        headerMenuUnfreezePlural: 'Unfreeze columns',
        headerMenuFilter: 'Filter',
        defaultEmptyMessage: 'Ingen data fundet',
        emptyCell: 'Tom',
        noVisibleColumnsMessage:
            'Der er i øjeblikket ingen synlige kolonner i tabellen. Vælg de kolonner, du har brug for i tabelindstillingerne.',
        resetChangesButtonLabel: 'Nulstil',
        editableCellNumberPlaceholder: 'Indtast værdi',
        editableCellDatePlaceholder: 'Indtast værdi',
        editableCellStringPlaceholder: 'Indtast værdi',
        P13ColumnsDialogHeader: 'Kolonner',
        P13ColumnsDialogSearchPlaceholder: 'Søg',
        P13ColumnsDialogsShowSelected: 'Vis valgte',
        P13ColumnsDialogShowAll: 'Vis alle',
        P13ColumnsDialogSelectAll: 'Vælg alle ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Annuller',
        P13ColumnsDialogMoveToTopBtn: 'Flyt til toppen',
        P13ColumnsDialogMoveUpBtn: 'Flyt op',
        P13ColumnsDialogMoveDownBtn: 'Flyt ned',
        P13ColumnsDialogMoveToBottomBtn: 'Flyt til bunden',
        P13FilterStrategyLabelBetween: 'mellem',
        P13FilterStrategyLabelContains: 'indeholder',
        P13FilterStrategyLabelBeginsWith: 'starter med',
        P13FilterStrategyLabelEndsWith: 'slutter med',
        P13FilterStrategyLabelEqualTo: 'lig med',
        P13FilterStrategyLabelGreaterThan: 'større end',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'større end eller lig med',
        P13FilterStrategyLabelLessThan: 'mindre end',
        P13FilterStrategyLabelLessThanOrEqualTo: 'mindre end eller lig med',
        P13FilterStrategyLabelAfter: 'efter',
        P13FilterStrategyLabelOnOrAfter: 'den eller efter',
        P13FilterStrategyLabelBefore: 'før',
        P13FilterStrategyLabelBeforeOrOn: 'inden eller den',
        P13FilterStrategyLabelNotDefined: 'Ikke defineret',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Ja',
        P13FilterBooleanOptionFalse: 'Nej',
        P13FilterDialogHeader: 'Filtrer efter',
        P13FilterDialogIncludePanelTitleWithCount: 'Medtag ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Medtag',
        P13FilterDialogExcludePanelTitleWithCount: 'Udeluk ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Udeluk',
        P13FilterDialogRemoveFilterBtnTitle: 'Fjern filter',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Annuller',
        P13GroupDialogHeader: 'Gruppér',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(ingen)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Vis felt som kolonne',
        P13GroupDialogRemoveGroupBtnTitle: 'Fjern',
        P13GroupDialogAddNewGroupBtnTitle: 'Tilføj ny',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Annuller',
        P13SortDialogHeader: 'Sortér',
        P13SortDialogNoneSelectedColumn: '(ingen)',
        P13SortDialogNoneSelectedSorting: '(ingen)',
        P13SortDialogSortOrderSelectOptionAsc: 'Stigende',
        P13SortDialogSortOrderSelectOptionDesc: 'Faldende',
        P13SortDialogRemoveSortBtnTitle: 'Fjern',
        P13SortDialogAddNewSortBtnTitle: 'Tilføj ny',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Annuller',
        toolbarSearchPlaceholder: 'Søg',
        toolbarActionCreateButtonLabel: 'Opret',
        toolbarActionSaveButtonLabel: 'Gem',
        toolbarActionCancelButtonLabel: 'Annuller',
        toolbarActionSortButtonTitle: 'Sortér',
        toolbarActionFilterButtonTitle: 'Filtrér',
        toolbarActionGroupButtonTitle: 'Gruppér',
        toolbarActionColumnsButtonTitle: 'Kolonner',
        toolbarActionExpandAllButtonTitle: 'Udvid alle',
        toolbarActionCollapseAllButtonTitle: 'Minimer alle',
        filterDialogNotFilteredLabel: '(Ikke filtreret)',
        filterDialogFilterByLabel: 'Filtrér efter: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtrér',
        filterDialogFilterBy: 'Filtrér efter',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Annuller',
        groupDialogHeader: 'Gruppe',
        groupDialogGroupOrderHeader: 'Grupperækkefølge',
        groupDialogGroupOrderAsc: 'Stigende',
        groupDialogGroupOrderDesc: 'Faldende',
        groupDialogGroupByHeader: 'Gruppér efter',
        groupDialogNotGroupedLabel: '(Ikke grupperet)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Annuller',
        sortDialogHeader: 'Sortér',
        sortDialogSortOrderHeader: 'Sorteringsrækkefølge',
        sortDialogSortOrderAsc: 'Stigende',
        sortDialogSortOrderDesc: 'Faldende',
        sortDialogSortByHeader: 'Sortér efter',
        sortDialogNotSortedLabel: '(Ikke sorteret)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Annuller',
        selectAllCheckboxLabel: 'Vælg alle',
        deselectAllCheckboxLabel: 'Fravælg alle',
        deselectSingleRow: 'Tryk på mellemrumstasten for at slette markering af række',
        selectSingleRow: 'Tryk på mellemrumstasten for at vælge række'
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
    platformWizardGenerator: { summarySectionEditStep: 'Rediger' },
    platformMessagePopover: {
        allErrors: 'Alle',
        defaultErrors: {
            email: 'E-mail er ugyldig',
            max: 'Feltet overskrider den maksimale værdi',
            maxLength: 'Feltet overskrider den maksimale længde',
            min: 'Feltværdien er mindre end det tilladte',
            minLength: 'Feltlængden er mindre end det tilladte',
            pattern: 'Feltværdien er ugyldig',
            required: 'Feltet er obligatorisk',
            requiredTrue: 'Feltet er obligatorisk'
        }
    },
    platformVariantManagement: {
        manage: 'Administrer',
        saveAs: 'Gem som',
        saveView: 'Gem visning',
        save: 'Gem',
        myViews: 'Mine visninger',
        view: 'Vis',
        setAsDefault: 'Indstil som standard',
        public: 'Offentlig',
        applyAutomatically: 'Anvend automatisk',
        requiredFieldError: 'Dette felt er obligatorisk.',
        nameTakenFieldError: 'En variant med et sådant navn findes allerede. Vælg et andet navn.',
        cancel: 'Annuller',
        manageViews: 'Administrer visninger',
        markAsFavourite: 'Markér som favorit',
        sharing: 'Deling',
        default: 'Standard',
        createdBy: 'Oprettet af',
        removeVariant: 'Fjern visning',
        search: 'Søg',
        access: { public: 'Offentlig', private: 'Privat' }
    },
    platformSelect: { selectOptionLabel: 'Vælg en mulighed' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'Udvid node', collapse: 'Komprimer node', noData: 'Ingen data' }
};
