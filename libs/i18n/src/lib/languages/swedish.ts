/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_SWEDISH: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Välj år',
        yearsRangeSelectionLabel: 'Välj årsintervall',
        monthSelectionLabel: 'Välj månad',
        dateSelectionLabel: 'Välj datum',
        previousYearLabel: 'Föregående år',
        nextYearLabel: 'Nästa år',
        previousMonthLabel: 'Föregående månad',
        nextMonthLabel: 'Nästa månad',
        weekColumnLabel: 'Kalendervecka',
        dateSelectedLabel: 'Valt datum',
        todayLabel: 'Idag',
        rangeStartLabel: 'Intervallstart',
        rangeEndLabel: 'Intervallslut',
        dayInPastLabel: 'Tidigare dagar',
        closeCalendarLabel: 'Stäng kalender',
        calendarDayViewDescription: 'Kalender',
        calendarMonthViewDescription: 'Månadsväljare',
        calendarYearsViewDescription: 'Årsväljare',
        calendarYearsRangeViewDescription: 'Årsintervallväljare'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Välj alla ({{selectedItems}} av {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Gå till föregående artikel',
        rightNavigationBtnLabel: 'Gå till nästa artikel'
    },
    coreDatePicker: {
        dateInputLabel: 'Datuminmatning',
        dateRangeInputLabel: 'Inmatning av datumintervall',
        displayCalendarToggleLabel: 'Öppna väljare',
        valueStateSuccessMessage: 'Värdestatus OK',
        valueStateInformationMessage: 'Värdestatus Information',
        valueStateWarningMessage: 'Värdestatus Varning',
        valueStateErrorMessage: 'Värdestatus Fel'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Tidpunktsinmatning',
        displayDatetimeToggleLabel: 'Visa kalender-toggle',
        displayTypeDateLabel: 'Datum',
        displayTypeTimeLabel: 'Tid',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'Avbryt'
    },
    coreFeedListItem: { moreLabel: '{{count}} mer', lessLabel: 'Mindre' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Avbryt',
        listItemStatusAriaLabel: 'Artikel har status. Status: {{status}}.',
        listItemCounterAriaLabel: 'Artikel har {{count}} underordnade.',
        listItemButtonDetailsTitle: 'Detaljer',
        listItemButtonDeleteTitle: 'Ta bort',
        listItemStatusContainsErrors: 'Innehåller fel',
        listItemStatusLocked: 'Låst',
        listItemStatusDraft: 'Utkast'
    },
    coreMessageStrip: { dismissLabel: 'Avvisa' },
    coreMultiInput: {
        multiInputAriaLabel: 'Inmatning av flera värden',
        noResults: 'Inga resultat.',
        navigateSelectionsWithArrows: 'Navigera urval med upp- och nedpilarna.',
        countListResultsSingular: '1 resultatlistobjekt.',
        countListResultsPlural: '{{count}} resultatlistobjekt.',
        escapeNavigateTokens:
            'Tryck på Esc för att stänga inmatningsfältet och använd vänster- och högerpilarna för att navigera genom valda alternativ.',
        tokensCountText: (params) => {
            return `Innehåller ${(() => {
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
    coreNavigation: { mainNavigation: 'Huvudnavigering', navigationPath: 'Navigeringssökväg' },
    coreNestedList: { linkItemAriaLabel: 'Trädelement {{itemDetails}}, {{index}} av {{total}}{{selectedDescription}}' },
    coreOverflowLayout: { moreItemsButton: '{{count}} fler' },
    corePagination: {
        pageLabel: 'Sida {{pageNumber}}',
        currentPageAriaLabel: 'Sida {{pageNumber}} är aktuell sida',
        labelBeforeInputMobile: 'Sida:',
        labelAfterInputMobile: 'av {{totalCount}}',
        inputAriaLabel: 'Angiven sida, aktuell sida, sida {{pageNumber}} av {{totalCount}}',
        itemsPerPageLabel: 'Resultat per sida:',
        firstLabel: 'Första',
        previousLabel: 'Föregående',
        nextLabel: 'Nästa',
        lastLabel: 'Sista',
        ariaLabel: 'Sidnumrering',
        totalResultsLabel: '{{totalCount}} resultat'
    },
    coreProductSwitch: { ariaLabel: 'Product Switch' },
    coreShellbar: { collapsedItemMenuLabel: 'Komprimerad artikelmeny', cancel: 'Avbryt', search: 'Sök' },
    coreSlider: {
        singleMinMaxDetails: 'Minimivärde för reglage är {{min}}, maximalt värde är {{max}}',
        singleValueminDetails: 'Värde är {{value}}',
        singleValuemaxDetails: 'Värde är {{value}}',
        singleValueNowDetails: 'Aktuellt värde är {{value}}',
        multipleHandle1MinMaxDetails: 'Intervallminimivärde för reglage är {{min}}, maximalt värde är {{max}}',
        multipleHandle1ValueminDetails: 'Värde är {{value}}',
        multipleHandle1ValuemaxDetails: 'Värde är {{value}}',
        multipleHandle1ValueNowDetails: 'Aktuellt värde är {{value}}',
        multipleHandle2MinMaxDetails: 'Intervallminimivärde för reglage är {{min}}, maximalt värde är {{max}}',
        multipleHandle2ValueminDetails: 'Värde är {{value}}',
        multipleHandle2ValuemaxDetails: 'Värde är {{value}}',
        multipleHandle2ValueNowDetails: 'Aktuellt värde är {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'Fler åtgärder', arialLabel: 'Delningsknapp' },
    coreSplitter: { paginationItemAriaLabel: 'Avsnitt' },
    coreStepInput: {
        incrementButtonTitle: 'Öka',
        decrementButtonTitle: 'Minska',
        ariaRoleDescription: 'Steginmatning'
    },
    coreSwitch: { semanticAcceptLabel: 'Acceptera', semanticDeclineLabel: 'Avslå' },
    coreTabs: { tabListExpandButtonText: 'Fler' },
    coreText: { moreLabel: 'Mer', lessLabel: 'Mindre' },
    coreTime: {
        componentAriaName: 'Val av klockslag',
        increaseHoursLabel: 'Öka timmar',
        hrsLabel: 'Tim.',
        decreaseHoursLabel: 'Minska timmar',
        increaseMinutesLabel: 'Öka minuter',
        minLabel: 'Min.',
        decreaseMinutesLabel: 'Minska minuter',
        increaseSecondsLabel: 'Öka sekunder',
        secLabel: 'Sek',
        hoursLabel: 'Timmar',
        minutesLabel: 'Minuter',
        secondsLabel: 'Sekunder',
        decreaseSecondsLabel: 'Minska sekunder',
        increasePeriodLabel: 'Öka period',
        periodLabel: 'Period',
        decreasePeriodLabel: 'Minska period',
        navigationInstruction:
            'Tryck på pilen högst upp eller längst ner för att flytta mellan artiklar. Tryck på vänster- eller högerpilen för att växla mellan listor.'
    },
    coreTimePicker: { timePickerInputLabel: 'Inmatning för val av klockslag', timePickerButtonLabel: 'Öppna väljare' },
    coreToken: { deleteButtonLabel: 'Kan tas bort', ariaRoleDescription: 'Token' },
    coreTokenizer: { moreLabel: '{{count}} fler', tokenizerLabel: 'Tokenizer' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'Avbryt',
        menuEditAriaLabel: 'Redigera',
        menuDeleteAriaLabel: 'Ta bort',
        menuOkAriaLabel: 'Redigera',
        menuCancelAriaLabel: 'Avbryt',
        formItemPlaceholder: 'Filnamn'
    },
    coreWizard: { ariaLabel: 'Guide' },
    coreBreadcrumb: { overflowTitleMore: 'Fler' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Lägg till nod',
        nodeMenuButtonTitle: 'Meny',
        defaultWatchersLabel: 'Bevakare',
        defaultTitle: 'Godkännandeprocess',
        nextButtonAriaLabel: 'Gå till nästa bild',
        prevButtonAriaLabel: 'Gå till föregående bild',
        editModeSaveButtonLabel: 'Spara',
        editModeExitButtonLabel: 'Avsluta',
        emptyTitle: 'Börja lägga till godkännare och bevakare',
        emptyHint:
            'Lägg till godkännare genom att klicka på "Lägg till ett steg". Lägg till bevakare genom att klicka på fältet Bevakare.',
        addNodeDialogHeaderAddApprovers: 'Lägg till godkännare',
        addNodeDialogHeaderEditApprover: 'Redigera godkännare',
        addNodeDialogHeaderAddApproverTeam: 'Användare/team',
        addNodeDialogHeaderDetail: 'Detalj',
        addNodeDialogNodeType: 'Parallell eller i serie',
        addNodeDialogNodeTypeSerial: 'I serie',
        addNodeDialogNodeTypeParallel: 'Parallellt',
        addNodeDialogApproverType: 'Godkännartyp',
        addNodeDialogApproverTypeUser: 'En användare',
        addNodeDialogApproverTypeTeamAnyone: 'Någon i teamet',
        addNodeDialogApproverTypeTeamEveryone: 'Alla i teamet',
        addNodeDialogUserOrTeam: 'Användare/team',
        addNodeDialogAddToNext: 'Lägg till i nästa serienod',
        addNodeDialogDueDate: 'Förfallodatum',
        addNodeSearchPlaceholder: 'Sök',
        addNodeAddActionBtnLabel: 'Lägg till',
        addNodeCancelActionBtnLabel: 'Avbryt',
        addNodeSelectApproverActionBtnLabel: 'Välj',
        addNodeCancelApproverSelectionActionBtnLabel: 'Avbryt',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Stäng',
        userDetailsHeader: 'Detalj',
        userDetailsSendReminderBtnLabel: 'Skicka påminnelse',
        userDetailsCancelBtnLabel: 'Avbryt',
        messagesApproverAddedSuccess: '1 godkännare har lagts till',
        messagesTeamAddedSuccess: '1 team har lagts till',
        messagesNodeEdited: '1 godkännare har redigerats',
        messagesNodeRemovedSingular: '1 godkännare har tagits bort',
        messagesNodeRemovedPlural: 'Godkännare har tagits bort',
        messagesTeamRemoved: '1 team har tagits bort',
        messagesErrorBuildGraph: 'Ett fel inträffade vid uppläggning av graf. Kontrollera initiala data.',
        messagesUndoAction: 'Ångra',
        nodeMembersCount: '{{count}} medlemmar',
        nodeVariousTeams: 'Olika team',
        nodeStatusDueToday: 'Förfaller idag',
        nodeStatusDueInXDays: 'Förfaller om {{count}} dagar',
        nodeStatusXDaysOverdue: '{{count}} dagar försenad',
        nodeActionAddApproversBefore: 'Lägg till godkännare före',
        nodeActionAddApproversAfter: 'Lägg till godkännare efter',
        nodeActionAddApproversParallel: 'Lägg till parallella godkännare',
        nodeActionEditApprover: 'Redigera godkännare',
        nodeActionRemove: 'Ta bort',
        selectTypeDialogMoveApproverAs: 'Flytta godkännare som',
        selectTypeDialogParallelOrSerial: 'Parallell eller i serie',
        selectTypeDialogNodeTypeParallel: 'Parallell godkännare',
        selectTypeDialogNodeTypeSerial: 'Godkännare i serie',
        selectTypeDialogConfirmButton: 'Bekräfta',
        selectTypeDialogCancelButton: 'Avbryt',
        toolbarAddStepButton: 'Lägg till ett steg',
        toolbarEditButton: 'Redigera',
        toolbarAddApproversBefore: 'Lägg till godkännare före',
        toolbarAddApproversAfter: 'Lägg till godkännare efter',
        toolbarAddApproversParallel: 'Lägg till parallella godkännare',
        toolbarRemove: 'Ta bort',
        toolbarEditApprover: 'Redigera godkännare',
        watchersInputPlaceholder: 'Sök här...',
        userListSelectedItemsCountSingular: '1 artikel har valts',
        userListSelectedItemsCountPlural: '{{count}} artiklar har valts',
        statusApproved: 'godkänd',
        statusRejected: 'avvisad',
        statusInProgress: 'pågår',
        statusNotStarted: 'ej påbörjad'
    },
    platformFeedInput: { userTitle: 'Användare' },
    platformVHD: {
        selectionBarLabel: 'Valda artiklar och villkorsposter',
        selectedAndConditionLabel: 'Valda artiklar och villkor',
        footerClearSelectedTitle: 'rensa valda artiklar',
        footerClearSelectedAriaLabel: 'rensa valda artiklar',
        searchButtonLabel: 'Kör',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Avbryt',
        selectedEmptyLabel: 'Inga artiklar eller villkor har valts',
        searchPlaceholder: 'Sök',
        searchAdvancedSearchLabel: 'Filter',
        searchShowAdvancedSearchLabel: 'Visa filter',
        searchHideAdvancedSearchLabel: 'Dölj filter',
        searchShowAllAdvancedSearchLabel: 'Visa alla filter',
        searchHideAllAdvancedSearchLabel: 'Dölj alla filter',
        selectTabDisplayCountLabel: 'Artiklar ({{antal}})',
        selectTabMoreBtnLabel: 'Mer',
        selectTabCountHiddenA11yLabel: 'innehåller {{rowCount}} rader och {{colCount}} kolumner',
        selectMobileTabBackBtnTitle: 'Tillbaka',
        selectMobileTabBtnOpenDialogLabel: 'Öppna dialog',
        selectMobileTabTitle: 'Fliken {{title}}',
        selectMobileConditionEmpty: 'Tom',
        defineConditionTitle: 'Produkt',
        defineConditionSelectedValueHiddenA11yLabel: 'valt värde {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Inkludera',
        defineConditionConditionsGroupHeaderExclude: 'Exkludera',
        defineConditionFromPlaceholder: 'från',
        defineConditionToPlaceholder: 'till',
        defineConditionValuePlaceholder: 'värde',
        defineConditionRemoveConditionButtonTitle: 'Ta bort villkor',
        defineConditionAddConditionButtonLabel: 'Lägg till',
        defineConditionAddConditionButtonTitle: 'Lägg till villkor',
        defineConditionConditionStrategyLabelContains: 'innehåller',
        defineConditionConditionStrategyLabelEqualTo: 'lika med',
        defineConditionConditionStrategyLabelBetween: 'mellan',
        defineConditionConditionStrategyLabelStartsWith: 'börjar med',
        defineConditionConditionStrategyLabelEndsWith: 'slutar med',
        defineConditionConditionStrategyLabelLessThan: 'mindre än',
        defineConditionConditionStrategyLabelLessThanEqual: 'mindre än eller lika med',
        defineConditionConditionStrategyLabelGreaterThan: 'större än',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'större än eller lika med',
        defineConditionConditionStrategyLabelEmpty: 'tom',
        defineConditionConditionStrategyLabelNotEqualTo: 'inte lika med',
        defineConditionConditionStrategyLabelNotEmpty: 'inte tom',
        defineConditionMaxCountError: 'Ange ett värde med högst {{count}} tecken',
        selectTabTitle: 'Välj i lista',
        searchTableEmptyMessage: 'Använd sökning för att få resultat',
        defineTabTitle: 'Definiera villkor'
    },
    platformCombobox: {
        countListResultsSingular: '1 resultatlistobjekt',
        countListResultsPlural: '{{count}} resultatlistobjekt'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Välj alternativ',
        inputIconTitle: 'Välj alternativ',
        mobileShowAllItemsButton: 'Visa alla artiklar',
        mobileShowSelectedItemsButton: 'Visa valda artiklar'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 tecken över gränsen',
        counterMessageCharactersOverTheLimitPlural: '{{count}} tecken över gränsen',
        counterMessageCharactersRemainingSingular: '1 tecken kvar',
        counterMessageCharactersRemainingPlural: '{{count}} tecken kvar'
    },
    platformLink: { roleDescriptionWithMedia: 'Media: {{media}}' },
    platformList: { loadingAriaLabel: 'läser in' },
    platformObjectListItem: { detailsActionAriaLabel: 'detalj', deleteActionAriaLabel: 'ta bort' },
    platformStandardListItem: { detailsActionAriaLabel: 'detalj', deleteActionAriaLabel: 'ta bort' },
    platformSearchField: {
        clearButtonTitle: 'Rensa',
        submitButtonTitle: 'Sök',
        searchInputLabel: 'Sök',
        synchronizeButtonTitle: 'Synkronisera',
        searchSuggestionMessage: '{{count}} förslag hittades.',
        searchSuggestionNavigateMessage: 'använd upp- och nedpilarna för att navigera'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Sök',
        submitButtonLabel: 'Kör',
        filtersButtonLabel: 'Filter ({{filtersCount}})',
        showFiltersButtonLabel: 'Visa filter',
        hideFiltersButtonLabel: 'Dölj filter',
        defineConditionsRemoveConditionButtonTitle: 'Ta bort villkor',
        defineConditionsAddConditionButtonLabel: 'Lägg till villkor',
        defineConditionsSubmitButtonLabel: 'Kör',
        defineConditionsCancelButton: 'Avbryt',
        selectFiltersHeader: 'Filter',
        selectFiltersAvailableFiltersText: 'Tillgängliga filter',
        selectFiltersFilterColumnLabel: 'Filter',
        selectFiltersActiveColumnLabel: 'Aktiv',
        selectFiltersSubmitButtonLabel: 'Kör',
        selectFiltersCancelButton: 'Avbryt',
        filterConditionContains: 'innehåller',
        filterConditionEqualTo: 'lika med',
        filterConditionBetween: 'mellan',
        filterConditionBeginsWith: 'börjar med',
        filterConditionEndsWith: 'slutar med',
        filterConditionLessThan: 'mindre än',
        filterConditionLessThanOrEqualTo: 'mindre än eller lika med',
        filterConditionGreaterThan: 'större än',
        filterConditionGreaterThanOrEqualTo: 'större än eller lika med',
        filterConditionAfter: 'efter',
        filterConditionOnOrAfter: 'på eller efter',
        filterConditionBefore: 'före',
        filterConditionBeforeOrOn: 'före eller på',
        filterConditionValuePlaceholder: 'värde',
        filterConditionValueFromPlaceholder: 'från',
        filterConditionValueToPlaceholder: 'till',
        settingsCategoryAll: 'Alla',
        settingsCategoryVisible: 'Synlig',
        settingsCategoryActive: 'Aktiv',
        settingsCategoryVisibleAndActive: 'Synliga och aktiva',
        settingsCategoryMandatory: 'Obligatoriska',
        manageFieldConditions: 'Hantera fältvillkor',
        refreshButtonAriaLabel: 'Uppdatera'
    },
    platformTable: {
        headerMenuSortAsc: 'Sortera stigande',
        headerMenuSortDesc: 'Sortera fallande',
        headerMenuGroup: 'Grupp',
        headerMenuFreeze: 'Frys',
        headerMenuEndFreeze: 'Frys till slut',
        headerMenuUnfreeze: 'Häv frysning',
        headerMenuFilter: 'Filtrera',
        defaultEmptyMessage: 'Inga data hittades',
        emptyCell: 'Tom',
        noVisibleColumnsMessage:
            'Just nu finns inga synliga kolumner i tabellen. Välj de kolumner du behöver i tabellinställningarna.',
        resetChangesButtonLabel: 'Återställ',
        editableCellNumberPlaceholder: 'Ange värde',
        editableCellDatePlaceholder: 'Ange värde',
        editableCellStringPlaceholder: 'Ange värde',
        P13ColumnsDialogHeader: 'Kolumner',
        P13ColumnsDialogSearchPlaceholder: 'Sök',
        P13ColumnsDialogsShowSelected: 'Visa valda',
        P13ColumnsDialogShowAll: 'Visa alla',
        P13ColumnsDialogSelectAll: 'Välj alla ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Avbryt',
        P13ColumnsDialogMoveToTopBtn: 'Flytta högst upp',
        P13ColumnsDialogMoveUpBtn: 'Flytta upp',
        P13ColumnsDialogMoveDownBtn: 'Flytta ned',
        P13ColumnsDialogMoveToBottomBtn: 'Flytta längst ned',
        P13FilterStrategyLabelBetween: 'mellan',
        P13FilterStrategyLabelContains: 'innehåller',
        P13FilterStrategyLabelBeginsWith: 'börjar med',
        P13FilterStrategyLabelEndsWith: 'slutar med',
        P13FilterStrategyLabelEqualTo: 'lika med',
        P13FilterStrategyLabelGreaterThan: 'större än',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'större än eller lika med',
        P13FilterStrategyLabelLessThan: 'mindre än',
        P13FilterStrategyLabelLessThanOrEqualTo: 'mindre än eller lika med',
        P13FilterStrategyLabelAfter: 'efter',
        P13FilterStrategyLabelOnOrAfter: 'på eller efter',
        P13FilterStrategyLabelBefore: 'före',
        P13FilterStrategyLabelBeforeOrOn: 'före eller på',
        P13FilterStrategyLabelNotDefined: 'Ej definierad',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Ja',
        P13FilterBooleanOptionFalse: 'Nej',
        P13FilterDialogHeader: 'Filtrera efter',
        P13FilterDialogIncludePanelTitleWithCount: 'Inkludera ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Inkludera',
        P13FilterDialogExcludePanelTitleWithCount: 'Exkludera ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Exkludera',
        P13FilterDialogRemoveFilterBtnTitle: 'Ta bort filter',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Avbryt',
        P13GroupDialogHeader: 'Grupp',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(inga)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Visa fält som kolumn',
        P13GroupDialogRemoveGroupBtnTitle: 'Ta bort',
        P13GroupDialogAddNewGroupBtnTitle: 'Lägg till ny',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Avbryt',
        P13SortDialogHeader: 'Sortera',
        P13SortDialogNoneSelectedColumn: '(inga)',
        P13SortDialogNoneSelectedSorting: '(inga)',
        P13SortDialogSortOrderSelectOptionAsc: 'Stigande',
        P13SortDialogSortOrderSelectOptionDesc: 'Fallande',
        P13SortDialogRemoveSortBtnTitle: 'Ta bort',
        P13SortDialogAddNewSortBtnTitle: 'Lägg till ny',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Avbryt',
        toolbarSearchPlaceholder: 'Sök',
        toolbarActionCreateButtonLabel: 'Skapa',
        toolbarActionSaveButtonLabel: 'Spara',
        toolbarActionCancelButtonLabel: 'Avbryt',
        toolbarActionSortButtonTitle: 'Sortera',
        toolbarActionFilterButtonTitle: 'Filtrera',
        toolbarActionGroupButtonTitle: 'Grupp',
        toolbarActionColumnsButtonTitle: 'Kolumner',
        toolbarActionExpandAllButtonTitle: 'Expandera alla',
        toolbarActionCollapseAllButtonTitle: 'Komprimera alla',
        filterDialogNotFilteredLabel: '(Ej filtrerat)',
        filterDialogFilterByLabel: 'Filtrera efter: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtrera',
        filterDialogFilterBy: 'Filtrera efter',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Avbryt',
        groupDialogHeader: 'Grupp',
        groupDialogGroupOrderHeader: 'Grupperingsordning',
        groupDialogGroupOrderAsc: 'Stigande',
        groupDialogGroupOrderDesc: 'Fallande',
        groupDialogGroupByHeader: 'Gruppera efter',
        groupDialogNotGroupedLabel: '(Ej grupperad)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Avbryt',
        sortDialogHeader: 'Sortera',
        sortDialogSortOrderHeader: 'Sorteringsordning',
        sortDialogSortOrderAsc: 'Stigande',
        sortDialogSortOrderDesc: 'Fallande',
        sortDialogSortByHeader: 'Sortera efter',
        sortDialogNotSortedLabel: '(Ej sorterad)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Avbryt',
        selectAllCheckboxLabel: 'Välj alla',
        deselectAllCheckboxLabel: 'Avmarkera alla',
        deselectSingleRow: 'Tryck på BLANKSTEG för att avmarkera rad',
        selectSingleRow: 'Tryck på BLANKSTEG för att välja rad'
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
    platformWizardGenerator: { summarySectionEditStep: 'Redigera' },
    platformMessagePopover: {
        allErrors: 'Alla',
        defaultErrors: {
            email: 'Ogiltig e-post',
            max: 'Fältet överskrider maximalt värde',
            maxLength: 'Fältet överskrider maximal längd',
            min: 'Fältvärde är mindre än vad som är tillåtet',
            minLength: 'Fältlängd är mindre än vad som är tillåtet',
            pattern: 'Fältvärde är ogiltigt',
            required: 'Fältet är obligatoriskt',
            requiredTrue: 'Fältet är obligatoriskt'
        }
    },
    platformVariantManagement: {
        manage: 'Hantera',
        saveAs: 'Spara som',
        saveView: 'Spara vy',
        save: 'Spara',
        myViews: 'Mina vyer',
        view: 'Visa',
        setAsDefault: 'Ange som standard',
        public: 'Offentlig',
        applyAutomatically: 'Tillämpa automatiskt',
        requiredFieldError: 'Fältet är obligatoriskt.',
        nameTakenFieldError: 'Variant med sådant namn finns redan. Välj ett annat namn.',
        cancel: 'Avbryt',
        manageViews: 'Administrera vyer',
        markAsFavourite: 'Markera som favorit',
        sharing: 'Delning',
        default: 'Standard',
        createdBy: 'Skapad av',
        removeVariant: 'Ta bort vy',
        search: 'Sök',
        access: { public: 'Offentlig', private: 'Privat' }
    },
    platformSelect: { selectOptionLabel: 'Välj ett alternativ' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'Expandera nod', collapse: 'Komprimera nod', noData: 'Inga data' }
};
