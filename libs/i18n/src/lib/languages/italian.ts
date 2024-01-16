/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_ITALIAN: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Seleziona anno',
        yearsRangeSelectionLabel: 'Seleziona intervallo anni',
        monthSelectionLabel: 'Seleziona mese',
        dateSelectionLabel: 'Seleziona data',
        previousYearLabel: 'Anno precedente',
        nextYearLabel: 'Anno successivo',
        previousMonthLabel: 'Mese precedente',
        nextMonthLabel: 'Mese successivo',
        weekColumnLabel: 'Settimana di calendario',
        dateSelectedLabel: 'Data selezionata',
        todayLabel: 'Oggi',
        rangeStartLabel: 'Inizio intervallo',
        rangeEndLabel: 'Fine intervallo',
        dayInPastLabel: 'Giorni passati',
        closeCalendarLabel: 'Chiudi calendario',
        calendarDayViewDescription: 'Calendario',
        calendarMonthViewDescription: 'Selettore mese',
        calendarYearsViewDescription: 'Selettore anno',
        calendarYearsRangeViewDescription: 'Selettore intervallo di anni'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Seleziona tutti ({{selectedItems}} di {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: "Vai all'elemento precedente",
        rightNavigationBtnLabel: "Vai all'elemento successivo"
    },
    coreDatePicker: {
        dateInputLabel: 'Immissione data',
        dateRangeInputLabel: 'Immissione intervallo date',
        displayCalendarToggleLabel: 'Apri selettore',
        valueStateSuccessMessage: 'Stato valore Operazione completata',
        valueStateInformationMessage: 'Stato valore Informazione',
        valueStateWarningMessage: 'Stato valore Avviso',
        valueStateErrorMessage: 'Stato valore Errore'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Immissione data/ora',
        displayDatetimeToggleLabel: 'Interruttore Visualizza calendario',
        displayTypeDateLabel: 'Data',
        displayTypeTimeLabel: 'Ora',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'Annulla'
    },
    coreFeedListItem: { moreLabel: 'Altri {{count}}', lessLabel: 'Meno' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Annulla',
        listItemStatusAriaLabel: "L'elemento ha stato {{status}}",
        listItemCounterAriaLabel: "L'elemento ha {{count}} subordinati.",
        listItemButtonDetailsTitle: 'Dettagli',
        listItemButtonDeleteTitle: 'Elimina',
        listItemStatusContainsErrors: 'Contiene errori',
        listItemStatusLocked: 'Bloccato',
        listItemStatusDraft: 'Bozza'
    },
    coreMessageStrip: { dismissLabel: 'Ignora' },
    coreMultiInput: {
        multiInputAriaLabel: 'Immissione multivalore',
        noResults: 'Nessun risultato.',
        navigateSelectionsWithArrows: 'Navigare tra le selezioni con le frecce su e giù',
        countListResultsSingular: '1 voce elenco dei risultati.',
        countListResultsPlural: '{{0}} voci elenco dei risultati',
        escapeNavigateTokens:
            'Premere Esc per chiudere il campo di immissione e utilizzare le frecce destra e sinistra per navigare tra le opzioni selezionate.',
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
    coreNavigation: { mainNavigation: 'Navigazione principale', navigationPath: 'Percorso di navigazione' },
    coreNestedList: {
        linkItemAriaLabel: "Elemento dell'albero {{itemDetails}}, {{index}} di {{total}}{{selectedDescription}}"
    },
    coreOverflowLayout: { moreItemsButton: 'Altri {{count}}' },
    corePagination: {
        pageLabel: 'Pagina {{pageNumber}}',
        currentPageAriaLabel: 'La pagina {{pageNumber}} è la pagina attuale',
        labelBeforeInputMobile: 'Pagina:',
        labelAfterInputMobile: 'di {{totalCount}}',
        inputAriaLabel: 'Input pagina, pagina attuale, pagina {{pageNumber}} di {{totalCount}}',
        itemsPerPageLabel: 'Risultati per pagina',
        firstLabel: 'Prima',
        previousLabel: 'Indietro',
        nextLabel: 'Avanti',
        lastLabel: 'Ultima',
        ariaLabel: 'Impaginazione',
        totalResultsLabel: '{{totalCount}} risultati'
    },
    coreProductSwitch: { ariaLabel: 'Switch prodotti' },
    coreShellbar: { collapsedItemMenuLabel: 'Voce menu compressa', cancel: 'Annulla', search: 'Cerca' },
    coreSlider: {
        singleMinMaxDetails: 'Il valore minimo del cursore è {{min}}, quello massimo è {{max}}',
        singleValueminDetails: 'Il valore è {{value}}',
        singleValuemaxDetails: 'Il valore è {{value}}',
        singleValueNowDetails: 'Il valore attuale è {{value}}',
        multipleHandle1MinMaxDetails:
            "Il valore minimo del cursore dell'intervallo è {{min}}, quello massimo è {{max}}",
        multipleHandle1ValueminDetails: 'Il valore è {{value}}',
        multipleHandle1ValuemaxDetails: 'Il valore è {{value}}',
        multipleHandle1ValueNowDetails: 'Il valore attuale è {{value}}',
        multipleHandle2MinMaxDetails:
            "Il valore minimo del cursore dell'intervallo è {{min}}, quello massimo è {{max}}",
        multipleHandle2ValueminDetails: 'Il valore è {{value}}',
        multipleHandle2ValuemaxDetails: 'Il valore è {{value}}',
        multipleHandle2ValueNowDetails: 'Il valore attuale è {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'Altre azioni', arialLabel: 'Pulsante Suddividi' },
    coreSplitter: { paginationItemAriaLabel: 'Sezione' },
    coreStepInput: {
        incrementButtonTitle: 'Incrementa',
        decrementButtonTitle: 'Diminuisci',
        ariaRoleDescription: 'Immissione fase'
    },
    coreSwitch: { semanticAcceptLabel: 'Accetta', semanticDeclineLabel: 'Rifiuta' },
    coreTabs: { tabListExpandButtonText: 'Di più' },
    coreText: { moreLabel: 'Di più', lessLabel: 'Di meno' },
    coreTime: {
        componentAriaName: 'Selettore ora',
        increaseHoursLabel: 'Aumenta ore',
        hrsLabel: 'Ore',
        decreaseHoursLabel: 'Diminuisci ore',
        increaseMinutesLabel: 'Aumenta minuti',
        minLabel: 'Min.',
        decreaseMinutesLabel: 'Diminuisci minuti',
        increaseSecondsLabel: 'Aumenta secondi',
        secLabel: 'Sec.',
        hoursLabel: 'Ore',
        minutesLabel: 'Minuti',
        secondsLabel: 'Secondi',
        decreaseSecondsLabel: 'Diminuisci secondi',
        increasePeriodLabel: 'Aumenta periodo',
        periodLabel: 'Periodo',
        decreasePeriodLabel: 'Diminuisci periodo',
        navigationInstruction:
            "Per spostarsi tra le voci dell'elenco, premere la freccia su o la freccia giù. Per passare da un elenco all'altro, premere la freccia destra o la freccia sinistra."
    },
    coreTimePicker: { timePickerInputLabel: 'Immissione selettore ora', timePickerButtonLabel: 'Apri selettore' },
    coreToken: { deleteButtonLabel: 'Eliminabile', ariaRoleDescription: 'token' },
    coreTokenizer: { moreLabel: 'Altri {{count}}', tokenizerLabel: 'Tokenizer' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'Annulla',
        menuEditAriaLabel: 'Modifica',
        menuDeleteAriaLabel: 'Elimina',
        menuOkAriaLabel: 'Modifica',
        menuCancelAriaLabel: 'Annulla',
        formItemPlaceholder: 'Nome file'
    },
    coreWizard: { ariaLabel: 'Procedura guidata' },
    coreBreadcrumb: { overflowTitleMore: 'Di più' },
    platformActionBar: { backButtonLabel: 'Torna indietro' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Aggiungi nodo',
        nodeMenuButtonTitle: 'Menu',
        defaultWatchersLabel: 'Osservatori',
        defaultTitle: 'Processo di approvazione',
        nextButtonAriaLabel: 'Vai alla diapositiva successiva',
        prevButtonAriaLabel: 'Vai alla diapositiva precedente',
        editModeSaveButtonLabel: 'Salva',
        editModeExitButtonLabel: 'Esci',
        emptyTitle: 'Iniziare ad aggiungere approvatori e osservatori',
        emptyHint:
            'Per aggiungere approvatori, fare clic su "Aggiungi una fase". Per aggiungere osservatori, fare clic sul campo Osservatori.',
        addNodeDialogHeaderAddApprovers: 'Aggiungi approvatori',
        addNodeDialogHeaderEditApprover: 'Modifica approvatore',
        addNodeDialogHeaderAddApproverTeam: 'Utente/team',
        addNodeDialogHeaderDetail: 'Dettagli',
        addNodeDialogNodeType: 'Parallelo o seriale',
        addNodeDialogNodeTypeSerial: 'Seriale',
        addNodeDialogNodeTypeParallel: 'Parallelo',
        addNodeDialogApproverType: 'Tipo di approvatore',
        addNodeDialogApproverTypeUser: 'Un utente',
        addNodeDialogApproverTypeTeamAnyone: 'Un membro del team',
        addNodeDialogApproverTypeTeamEveryone: 'Tutti i membri del team',
        addNodeDialogUserOrTeam: 'Utente/team',
        addNodeDialogAddToNext: 'Aggiungi al nodo seriale successivo',
        addNodeDialogDueDate: 'Scadenza',
        addNodeSearchPlaceholder: 'Cerca',
        addNodeAddActionBtnLabel: 'Aggiungi',
        addNodeCancelActionBtnLabel: 'Annulla',
        addNodeSelectApproverActionBtnLabel: 'Seleziona',
        addNodeCancelApproverSelectionActionBtnLabel: 'Annulla',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Chiudi',
        userDetailsHeader: 'Dettagli',
        userDetailsSendReminderBtnLabel: 'Invia promemoria',
        userDetailsCancelBtnLabel: 'Annulla',
        messagesApproverAddedSuccess: '1 approvatore è stato aggiunto',
        messagesTeamAddedSuccess: '1 team è stato aggiunto',
        messagesNodeEdited: '1 approvatore è stato modificato',
        messagesNodeRemovedSingular: '1 approvatore è stato rimosso',
        messagesNodeRemovedPlural: 'Gli approvatori sono stati rimossi',
        messagesTeamRemoved: '1 team è stato rimosso',
        messagesErrorBuildGraph:
            'Si è verificato un errore durante il tentativo di creazione del grafico. Controllare i dati iniziali.',
        messagesUndoAction: 'Annulla',
        nodeMembersCount: '{{count}} membri',
        nodeVariousTeams: 'Vari team',
        nodeStatusDueToday: 'Scade oggi',
        nodeStatusDueInXDays: 'Scade tra {{count}} giorni',
        nodeStatusXDaysOverdue: 'Scaduto da {{count}} giorni',
        nodeActionAddApproversBefore: 'Aggiungi approvatori prima',
        nodeActionAddApproversAfter: 'Aggiungi approvatori dopo',
        nodeActionAddApproversParallel: 'Aggiungi approvatori paralleli',
        nodeActionEditApprover: 'Modifica approvatore',
        nodeActionRemove: 'Rimuovi',
        selectTypeDialogMoveApproverAs: 'Sposta approvatore come',
        selectTypeDialogParallelOrSerial: 'Parallelo o seriale',
        selectTypeDialogNodeTypeParallel: 'Approvatore parallelo',
        selectTypeDialogNodeTypeSerial: 'Approvatore seriale',
        selectTypeDialogConfirmButton: 'Conferma',
        selectTypeDialogCancelButton: 'Annulla',
        toolbarAddStepButton: 'Aggiungi una fase',
        toolbarEditButton: 'Modifica',
        toolbarAddApproversBefore: 'Aggiungi approvatori prima',
        toolbarAddApproversAfter: 'Aggiungi approvatori dopo',
        toolbarAddApproversParallel: 'Aggiungi approvatori paralleli',
        toolbarRemove: 'Rimuovi',
        toolbarEditApprover: 'Modifica approvatore',
        watchersInputPlaceholder: 'Cerca qui...',
        userListSelectedItemsCountSingular: '1 voce selezionata',
        userListSelectedItemsCountPlural: '{{count}} voci selezionate',
        statusApproved: 'approvata',
        statusRejected: 'rifiutata',
        statusInProgress: 'In corso',
        statusNotStarted: 'non avviata'
    },
    platformFeedInput: { userTitle: 'Utente' },
    platformVHD: {
        selectionBarLabel: 'Voci condizione e selezionate',
        selectedAndConditionLabel: 'Voci e condizioni selezionate',
        footerClearSelectedTitle: 'cancella voci selezionate',
        footerClearSelectedAriaLabel: 'cancella voci selezionate',
        searchButtonLabel: 'Vai',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Annulla',
        selectedEmptyLabel: 'Nessuna voce o condizione selezionata',
        searchPlaceholder: 'Cerca',
        searchAdvancedSearchLabel: 'Filtri',
        searchShowAdvancedSearchLabel: 'Mostra filtri',
        searchHideAdvancedSearchLabel: 'Nascondi filtri',
        searchShowAllAdvancedSearchLabel: 'Mostra tutti i filtri',
        searchHideAllAdvancedSearchLabel: 'Nascondi tutti i filtri',
        selectTabDisplayCountLabel: 'Voci ({{count}})',
        selectTabMoreBtnLabel: 'Di più',
        selectTabCountHiddenA11yLabel: 'contiene {{rowCount}} righe e {{colCount}} colonne',
        selectMobileTabBackBtnTitle: 'Indietro',
        selectMobileTabBtnOpenDialogLabel: 'Apri finestra di dialogo',
        selectMobileTabTitle: 'Scheda {{title}}',
        selectMobileConditionEmpty: 'Vuoto',
        defineConditionTitle: 'Prodotto',
        defineConditionSelectedValueHiddenA11yLabel: 'valore selezionato {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Includi',
        defineConditionConditionsGroupHeaderExclude: 'Escludi',
        defineConditionFromPlaceholder: 'da',
        defineConditionToPlaceholder: 'a',
        defineConditionValuePlaceholder: 'valore',
        defineConditionRemoveConditionButtonTitle: 'Rimuovi condizione',
        defineConditionAddConditionButtonLabel: 'Aggiungi',
        defineConditionAddConditionButtonTitle: 'Aggiungi condizione',
        defineConditionConditionStrategyLabelContains: 'contiene',
        defineConditionConditionStrategyLabelEqualTo: 'uguale a',
        defineConditionConditionStrategyLabelBetween: 'tra',
        defineConditionConditionStrategyLabelStartsWith: 'inizia con',
        defineConditionConditionStrategyLabelEndsWith: 'termina con',
        defineConditionConditionStrategyLabelLessThan: 'minore di',
        defineConditionConditionStrategyLabelLessThanEqual: 'minore o uguale a',
        defineConditionConditionStrategyLabelGreaterThan: 'maggiore di',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'maggiore o uguale a',
        defineConditionConditionStrategyLabelEmpty: 'vuoto',
        defineConditionConditionStrategyLabelNotEqualTo: 'diverso da',
        defineConditionConditionStrategyLabelNotEmpty: 'non vuoto',
        defineConditionMaxCountError: 'Immettere un valore con massimo {{count}} caratteri.',
        selectTabTitle: "Seleziona dall'elenco",
        searchTableEmptyMessage: 'Utilizza la ricerca per ottenere dei risultati',
        defineTabTitle: 'Definisci condizioni'
    },
    platformCombobox: {
        countListResultsSingular: '1 voce elenco dei risultati',
        countListResultsPlural: '{{count}} voci elenco dei risultati'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Seleziona opzioni',
        inputIconTitle: 'Seleziona opzioni',
        mobileShowAllItemsButton: 'Mostra tutte le voci',
        mobileShowSelectedItemsButton: 'Mostra le voci selezionate'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 carattere oltre il limite',
        counterMessageCharactersOverTheLimitPlural: '{{count}} caratteri oltre il limite',
        counterMessageCharactersRemainingSingular: '1 carattere rimanente',
        counterMessageCharactersRemainingPlural: '{{count}} caratteri rimanenti'
    },
    platformLink: { roleDescriptionWithMedia: 'Media: {{media}}' },
    platformList: { loadingAriaLabel: 'caricamento in corso...' },
    platformObjectListItem: { detailsActionAriaLabel: 'dettagli', deleteActionAriaLabel: 'elimina' },
    platformStandardListItem: { detailsActionAriaLabel: 'dettagli', deleteActionAriaLabel: 'elimina' },
    platformSearchField: {
        clearButtonTitle: 'Cancella',
        submitButtonTitle: 'Cerca',
        searchInputLabel: 'Cerca',
        synchronizeButtonTitle: 'Sincronizza',
        searchSuggestionMessage: '{{count}} suggerimenti trovati.',
        searchSuggestionNavigateMessage: 'utilizzare le frecce su e giù per navigare'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Cerca',
        submitButtonLabel: 'Vai',
        filtersButtonLabel: 'Filtri ({{filtersCount}})',
        showFiltersButtonLabel: 'Mostra filtri',
        hideFiltersButtonLabel: 'Nascondi filtri',
        defineConditionsRemoveConditionButtonTitle: 'Rimuovi condizione',
        defineConditionsAddConditionButtonLabel: 'Aggiungi condizione',
        defineConditionsSubmitButtonLabel: 'Vai',
        defineConditionsCancelButton: 'Annulla',
        selectFiltersHeader: 'Filtri',
        selectFiltersAvailableFiltersText: 'Filtri disponibili',
        selectFiltersFilterColumnLabel: 'Filtro',
        selectFiltersActiveColumnLabel: 'Attivo',
        selectFiltersSubmitButtonLabel: 'Vai',
        selectFiltersCancelButton: 'Annulla',
        filterConditionContains: 'contiene',
        filterConditionEqualTo: 'uguale a',
        filterConditionBetween: 'tra',
        filterConditionBeginsWith: 'inizia con',
        filterConditionEndsWith: 'termina con',
        filterConditionLessThan: 'minore di',
        filterConditionLessThanOrEqualTo: 'minore o uguale a',
        filterConditionGreaterThan: 'maggiore di',
        filterConditionGreaterThanOrEqualTo: 'maggiore o uguale a',
        filterConditionAfter: 'dopo',
        filterConditionOnOrAfter: 'il o dopo',
        filterConditionBefore: 'prima',
        filterConditionBeforeOrOn: 'prima o il',
        filterConditionValuePlaceholder: 'valore',
        filterConditionValueFromPlaceholder: 'da',
        filterConditionValueToPlaceholder: 'a',
        settingsCategoryAll: 'Tutti',
        settingsCategoryVisible: 'Visibili',
        settingsCategoryActive: 'Attivi',
        settingsCategoryVisibleAndActive: 'Visibili e attivi',
        settingsCategoryMandatory: 'Obbligatori',
        manageFieldConditions: 'Gestisci condizioni campo',
        refreshButtonAriaLabel: 'Aggiorna'
    },
    platformTable: {
        headerMenuSortAsc: 'Ordina in ordine crescente',
        headerMenuSortDesc: 'Ordina in ordine decrescente',
        headerMenuGroup: 'Raggruppa',
        headerMenuFreeze: 'Freeze column',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Unfreeze column',
        headerMenuFreezePlural: 'Freeze columns',
        headerMenuUnfreezePlural: 'Unfreeze columns',
        headerMenuFilter: 'Filtra',
        defaultEmptyMessage: 'Non sono stati trovati dati',
        emptyCell: 'Vuoto',
        noVisibleColumnsMessage:
            'Al momento non esistono colonne visibili nella tabella. Selezionare le colonne necessarie nelle impostazioni tabella.',
        resetChangesButtonLabel: 'Reimposta',
        editableCellNumberPlaceholder: 'Immetti il valore',
        editableCellDatePlaceholder: 'Immetti il valore',
        editableCellStringPlaceholder: 'Immetti il valore',
        P13ColumnsDialogHeader: 'Colonne',
        P13ColumnsDialogSearchPlaceholder: 'Cerca',
        P13ColumnsDialogsShowSelected: 'Mostra selezione',
        P13ColumnsDialogShowAll: 'Mostra tutto',
        P13ColumnsDialogSelectAll: 'Seleziona tutto ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Annulla',
        P13ColumnsDialogMoveToTopBtn: 'Sposta in cima',
        P13ColumnsDialogMoveUpBtn: 'Sposta su',
        P13ColumnsDialogMoveDownBtn: 'Sposta giù',
        P13ColumnsDialogMoveToBottomBtn: 'Sposta in fondo',
        P13FilterStrategyLabelBetween: 'tra',
        P13FilterStrategyLabelContains: 'contiene',
        P13FilterStrategyLabelBeginsWith: 'inizia con',
        P13FilterStrategyLabelEndsWith: 'termina con',
        P13FilterStrategyLabelEqualTo: 'uguale a',
        P13FilterStrategyLabelGreaterThan: 'maggiore di',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'maggiore o uguale a',
        P13FilterStrategyLabelLessThan: 'minore di',
        P13FilterStrategyLabelLessThanOrEqualTo: 'minore o uguale a',
        P13FilterStrategyLabelAfter: 'dopo',
        P13FilterStrategyLabelOnOrAfter: 'il o dopo',
        P13FilterStrategyLabelBefore: 'prima',
        P13FilterStrategyLabelBeforeOrOn: 'prima o il',
        P13FilterStrategyLabelNotDefined: 'Non definito',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Sì',
        P13FilterBooleanOptionFalse: 'No',
        P13FilterDialogHeader: 'Filtra per',
        P13FilterDialogIncludePanelTitleWithCount: 'Includi ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Includi',
        P13FilterDialogExcludePanelTitleWithCount: 'Escludi ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Escludi',
        P13FilterDialogRemoveFilterBtnTitle: 'Rimuovi filtro',
        P13FilterDialoAddFilterBtnTitle: 'Aggiungi filtro',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Annulla',
        P13GroupDialogHeader: 'Gruppo',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(nessun valore)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Mostra campo come colonna',
        P13GroupDialogRemoveGroupBtnTitle: 'Rimuovi',
        P13GroupDialogAddNewGroupBtnTitle: 'Aggiungi nuovo',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Annulla',
        P13SortDialogHeader: 'Ordina',
        P13SortDialogNoneSelectedColumn: '(nessuno)',
        P13SortDialogNoneSelectedSorting: '(nessuno)',
        P13SortDialogSortOrderSelectOptionAsc: 'Crescente',
        P13SortDialogSortOrderSelectOptionDesc: 'Decrescente',
        P13SortDialogRemoveSortBtnTitle: 'Rimuovi',
        P13SortDialogAddNewSortBtnTitle: 'Aggiungi riga',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Annulla',
        toolbarSearchPlaceholder: 'Cerca',
        toolbarActionCreateButtonLabel: 'Crea',
        toolbarActionSaveButtonLabel: 'Salva',
        toolbarActionCancelButtonLabel: 'Annulla',
        toolbarActionSortButtonTitle: 'Ordina',
        toolbarActionFilterButtonTitle: 'Filtra',
        toolbarActionGroupButtonTitle: 'Raggruppa',
        toolbarActionColumnsButtonTitle: 'Colonne',
        toolbarActionExpandAllButtonTitle: 'Espandi tutto',
        toolbarActionCollapseAllButtonTitle: 'Comprimi tutto',
        filterDialogNotFilteredLabel: '(Non filtrato)',
        filterDialogFilterByLabel: 'Filtra per: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtra',
        filterDialogFilterBy: 'Filtra per',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Annulla',
        groupDialogHeader: 'Gruppo',
        groupDialogGroupOrderHeader: 'Ordine di raggruppamento',
        groupDialogGroupOrderAsc: 'Crescente',
        groupDialogGroupOrderDesc: 'Decrescente',
        groupDialogGroupByHeader: 'Raggruppa per',
        groupDialogNotGroupedLabel: '(Non raggruppato)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Annulla',
        sortDialogHeader: 'Ordina',
        sortDialogSortOrderHeader: 'Ordinamento',
        sortDialogSortOrderAsc: 'Crescente',
        sortDialogSortOrderDesc: 'Decrescente',
        sortDialogSortByHeader: 'Ordina per',
        sortDialogNotSortedLabel: '(Non ordinato)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Annulla',
        selectAllCheckboxLabel: 'Seleziona tutto',
        deselectAllCheckboxLabel: 'Deseleziona tutto',
        deselectSingleRow: 'Per deselezionare la riga, premere la BARRA SPAZIATRICE',
        selectSingleRow: 'Per selezionare la riga, premere la BARRA SPAZIATRICE'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Vai a Precedente',
        detailsGotoNextButtonTitle: 'Vai a Avanti',
        detailsDialogCloseBtnLabel: 'Chiudi',
        roleDescription: 'Immagine'
    },
    platformUploadCollection: {
        moveToTitle: 'Sposta a',
        moveToTitleFolder: 'Cartella',
        moveToNewFolderBtnLabel: 'Nuova cartella',
        moveToAllFilesSubHeaderLabel: 'Tutti i files',
        moveToConfirmBtn: 'Sposta',
        moveToCloseBtn: 'Annulla',
        newFolderTitle: 'Nuova cartella',
        newFolderAtRootInputLabel: 'Nome della nuova cartella',
        newFolderAtFolderInputLabel: "Nome della nuova cartella all'interno di {{ folderName }}",
        newFolderInputPlaceholder: 'Scrivi qui..',
        newFolderInputErrorLabel: 'Massimo {{ count }} caratteri consentiti',
        newFolderDialogCreateBtnLabel: 'Crea',
        newFolderDialogCancelBtnLabel: 'Annulla',
        breadcrumbLabelAllFiles: 'Tutti i files',
        breadcrumbLabelAllFilesWithTotal: 'Tutti i files ({{ total }})',
        searchPlaceholder: 'Cerca',
        addBtnLabel: 'Aggiungi',
        newFolderBtnLabel: 'Nuova cartella',
        moveToBtnLabel: 'Sposta a',
        downloadBtnLabel: 'Scarica',
        updateVersionBtnLabel: 'Aggiorna versione',
        removeBtnLabel: 'Rimuovi',
        folderIconTitle: 'Icona cartella',
        fileIconTitle: 'Icona file',
        editFileNameInputPlaceholder: 'Inserisci un nome',
        editFileNameFileAlreadyExistsError: 'Il file con questo nome esiste già',
        editFileNameFolderAlreadyExistsError: 'La cartella con questo nome esiste già',
        itemStatusSuccessful: 'Successo',
        itemStatusUnsuccessful: 'Non successo',
        uploadNewFileAfterFailAction: 'Esegui',
        cancelUploadNewFileAction: 'Annulla',
        itemMenuBtnTitle: 'Altro',
        dragDropAreaText: 'Trascina i file per caricarli',
        noDataText: 'Nessun file trovato',
        noDataDescription: 'Trascina i file da caricare o usa il pulsante "Aggiungi".',
        paginationTotal: 'Visualizzazione di {{ from }}-{{ to }} di {{ total }}',
        resultsPerPage: 'Risultati per pagina',
        messageCreateFailed: 'Impossibile creare {{ folderName }}.',
        messageCreateSuccess: '{{ folderName }} è stato creato.',
        messageUpdateVersionFailed: 'Impossibile aggiornare la versione di {{ folderName }}.',
        messageUpdateVersionSuccess: 'La versione di {{ folderName }} è stata aggiornata.',
        messageFileRenameFailed: 'Impossibile rinominare"{{ from }}" in "{{ to }}."',
        messageFileRenameSuccess: '"{{ from }}" è stato rinominato in "{{ to }}".',
        messageRemoveFoldersAndFilesFailed:
            'Impossibile rimuovere le cartelle {{ foldersCount }} e i file {{ filesCount }}.',
        messageRemoveFoldersAndFilesSuccess:
            'Le cartelle {{ foldersCount }} e i file {{ filesCount }} sono state rimosse.',
        messageRemoveFoldersFailed: 'Impossibile rimuovere le cartelle {{ foldersount }}.',
        messageRemoveFoldersSuccess: 'Le cartelle {{ foldersCount }} sono state rimosse.',
        messageRemoveFilesFailed: 'Impossibile rimuovere {{ filesCount }} file.',
        messageRemoveFilesSuccess: 'I file {{ filesCount }} sono stati rimossi.',
        messageRemoveFileOrFolderFailed: 'Impossibile rimuovere {{ name }}.',
        messageRemoveFileOrFolderSuccess: '{{ nome }} è stato rimosso.',
        messageMoveFoldersAndFilesFailed:
            'Impossibile spostare le cartelle {{ foldersCount }} e i file {{ filesCount }} in {{ to }}.',
        messageMoveFoldersAndFilesSuccess:
            '{{ foldersCount }} cartelle e {{ filesCount }} file sono stati sposati in {{ to }}.',
        messageMoveFoldersFailed: 'Impossibile spostare le cartelle {{ foldersCount }} in {{ to }}.',
        messageMoveFoldersSuccess: 'Le cartelle {{ foldersCount }} sono state spostate in {{ to }}.',
        messageMoveFilesFailed: 'Impossibile spostare i file {{ filesCount }} in {{ to }}.',
        messageMoveFilesSuccess: 'I file {{ filesCount }} sono stati spostati in {{ to }}.',
        messageMoveFileOrFolderFailed: 'Impossibile spostare {{ name }} in {{ to }}.',
        messageMoveFileOrFolderSuccess: '{{ name }} è stato spostato in {{ to }}.',
        messageMoveRootFoldersAndFilesFailed:
            'Impossibile spostare le cartelle {{ foldersCount }} e i file {{ filesCount }} in tutti i file.',
        messageMoveRootFoldersAndFilesSuccess:
            'Le cartelle {{ foldersCount }} e i file {{ filesCount }}  sono state spostate in tutti i file.',
        messageMoveRootFoldersFailed: 'Impossibile spostare le cartelle {{ foldersCount }} in tutti i file.',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} le cartelle sono state spostate in tutti i file.',
        messageMoveRootFilesFailed: 'Impossibile spostare i file {{ filesCount }} in tutti i file.',
        messageMoveRootFilesSuccess: '{{ filesCount }} file sono stati spostati in tutti i file.',
        messageMoveRootFileOrFolderFailed: 'Impossibile spostare {{ name }} in tutti i file.',
        messageMoveRootFileOrFolderSuccess: '{{ name }} è stato spostato in tutti i file.',
        messageFileTypeMismatchPlural:
            '{{ filesCount }} file hanno il tipo sbagliato. Tipi consentiti: {{ allowedTypes }}',
        messageFileTypeMismatchSingular:
            'Il file "{{ fileName }}" ha il tipo errato. Tipi consentiti: {{ allowedTypes }}.',
        messageFileSizeExceededPlural:
            '{{ filesCount }} file hanno superato la dimensione massima del file. Dimensione file massima consentita: {{ maxFileSize }}.',
        messageFileSizeExceededSingular:
            'Il file "{{ fileName }}" ha superato le dimensioni massime del file. Dimensione file massima consentita: {{ maxFileSize }}.',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} file hanno superato la lunghezza massima del nome file. Lunghezza del nome file consentita: {{ maxFilenameLength }} caratteri.',
        messageFileNameLengthExceededSingular:
            'Il nome "{{ fileName }}" ha superato la lunghezza massima del nome del file. Lunghezza del nome consentita: {{ maxFilenameLength }} caratteri.'
    },
    platformWizardGenerator: { summarySectionEditStep: 'Modifica' },
    platformMessagePopover: {
        allErrors: 'Tutti',
        defaultErrors: {
            email: 'E-mail non valida',
            max: 'Il campo supera il valore massimo',
            maxLength: 'Il campo supera la lunghezza massima',
            min: 'Il valore campo è minore del consentito',
            minLength: 'La lunghezza del campo è minore del consentito',
            pattern: 'Valore campo non valido',
            required: 'Il campo è obbligatorio',
            requiredTrue: 'Il campo è obbligatorio'
        }
    },
    platformVariantManagement: {
        manage: 'Gestisci',
        saveAs: 'Salva con nome',
        saveView: 'Salva view',
        save: 'Salva',
        myViews: 'Le mie view',
        view: 'Visualizza',
        setAsDefault: 'Imposta come valore predefinito',
        public: 'Pubblico',
        applyAutomatically: 'Applica automaticamente',
        requiredFieldError: 'Questo campo è obbligatorio.',
        nameTakenFieldError: 'Esiste già una variante con questo nome. Selezionare un nome differente.',
        cancel: 'Annulla',
        manageViews: 'Gestisci view',
        markAsFavourite: 'Contrassegna come preferito',
        sharing: 'In condivisione',
        default: 'Predefinita',
        createdBy: 'Autore',
        removeVariant: 'Rimuovi view',
        search: 'Cerca',
        access: { public: 'Pubblico', private: 'Privato' }
    },
    platformSelect: { selectOptionLabel: "Selezionare un'opzione" },
    fnSlider: {
        minMaxDetails: 'Il valore minimo dello slider è {{ min }}, il valore massimo è {{ max }}',
        valueminDetails: 'Il valore è  {{ value }}',
        valuemaxDetails: 'Il valore è {{ value }}',
        valueNowDetails: 'Il valore attuale è{{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accettare', semanticDeclineLabel: 'Declino' },
    coreTree: { expand: 'Espandi nodo', collapse: 'Comprimi nodo', noData: 'Nessun dato' }
};
