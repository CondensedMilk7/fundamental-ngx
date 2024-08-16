/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_SPANISH: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'Seleccionar año',
        yearsRangeSelectionLabel: 'Seleccionar rango de años',
        monthSelectionLabel: 'Seleccionar mes',
        dateSelectionLabel: 'Seleccionar fecha',
        previousYearLabel: 'Año anterior',
        nextYearLabel: 'Siguiente año',
        previousMonthLabel: 'Mes anterior',
        nextMonthLabel: 'Siguiente mes',
        weekColumnLabel: 'Semana natural',
        dateSelectedLabel: 'Fecha seleccionada',
        todayLabel: 'Hoy',
        rangeStartLabel: 'Inicio del rango',
        rangeEndLabel: 'Fin del rango',
        dayInPastLabel: 'Días antes',
        closeCalendarLabel: 'Cerrar calendario',
        calendarDayViewDescription: 'Calendario',
        calendarMonthViewDescription: 'Selector de mes',
        calendarYearsViewDescription: 'Selector de año',
        calendarYearsRangeViewDescription: 'Selector de rango de años'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'Seleccionar todos ({{selectedItems}} de {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Ir a elemento anterior',
        rightNavigationBtnLabel: 'Ir a siguiente elemento'
    },
    coreDatePicker: {
        dateInputLabel: 'Entrada de fecha',
        dateRangeInputLabel: 'Entrada de rango de fechas',
        displayCalendarToggleLabel: 'Abrir selector',
        valueStateSuccessMessage: 'Estado de valor: Correcto',
        valueStateInformationMessage: 'Estado de valor: Información',
        valueStateWarningMessage: 'Estado de valor: Advertencia',
        valueStateErrorMessage: 'Estado de valor: Error'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Entrada de fecha/hora',
        displayDatetimeToggleLabel: 'Mostrar alternancia de calendario',
        displayTypeDateLabel: 'Fecha',
        displayTypeTimeLabel: 'Hora',
        datetimeOkLabel: 'Aceptar',
        datetimeCancelLabel: 'Cancelar'
    },
    coreDynamicPage: {
        expandLabel: 'Desplegar cabecera',
        collapseLabel: 'Contraer cabecera',
        pinLabel: 'Anclar cabecera',
        unpinLabel: 'Desanclar cabecera'
    },
    coreFeedListItem: { moreLabel: '{{count}} más', lessLabel: 'Menos' },
    coreGridList: {
        filterBarCancelButtonTitle: 'Cancelar',
        listItemStatusAriaLabel: 'El elemento tiene estatus. Estatus: {{status}}.',
        listItemCounterAriaLabel: 'El elemento tiene {{count}} elementos secundarios.',
        listItemButtonDetailsTitle: 'Detalles',
        listItemButtonDeleteTitle: 'Suprimir',
        listItemStatusContainsErrors: 'Contiene errores',
        listItemStatusLocked: 'Bloqueado',
        listItemStatusDraft: 'Borrador'
    },
    coreMessageStrip: { dismissLabel: 'Descartar' },
    coreMultiInput: {
        multiInputAriaLabel: 'Entrada de varios valores',
        noResults: 'No hay resultados.',
        navigateSelectionsWithArrows: 'Desplácese por las selecciones con las flechas de arriba y abajo.',
        countListResultsSingular: '1 elemento de la lista de resultados',
        countListResultsPlural: '{{count}} elementos de la lista de resultados',
        escapeNavigateTokens:
            'Pulse Escape para salir del campo de entrada y utilice las teclas de flecha izquierda y derecha para desplazarse por las opciones seleccionadas.',
        tokensCountText: (params) => {
            return `Contiene ${(() => {
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
    coreNavigation: { mainNavigation: 'Navegación principal', navigationPath: 'Ruta de navegación' },
    coreNestedList: {
        linkItemAriaLabel: 'Elemento de árbol {{itemDetails}}, {{index}} de {{total}}{{selectedDescription}}'
    },
    coreOverflowLayout: { moreItemsButton: '{{count}} más' },
    corePagination: {
        pageLabel: 'Página {{pageNumber}}',
        currentPageAriaLabel: 'La página {{pageNumber}} es la página actual',
        labelBeforeInputMobile: 'Página:',
        labelAfterInputMobile: 'de {{totalCount}}',
        inputAriaLabel: 'Entrada de página, Página actual, Pagina {{pageNumber}} de {{totalCount}}',
        itemsPerPageLabel: 'Resultados por página:',
        firstLabel: 'Primero',
        previousLabel: 'Anterior',
        nextLabel: 'Siguiente',
        lastLabel: 'Último',
        ariaLabel: 'Paginación',
        totalResultsLabel: '{{totalCount}} resultados'
    },
    coreProductSwitch: { ariaLabel: 'Cambiar producto' },
    coreShellbar: { collapsedItemMenuLabel: 'Menú de elementos contraídos', cancel: 'Cancelar', search: 'Buscar' },
    coreSlider: {
        singleMinMaxDetails: 'El valor mínimo del slider es {{min}}, el valor máximo es {{max}}',
        singleValueminDetails: 'El valor es {{value}}',
        singleValuemaxDetails: 'El valor es {{value}}',
        singleValueNowDetails: 'El valor actual es {{value}}',
        multipleHandle1MinMaxDetails: 'El valor mínimo del slider de rango es {{min}}, el valor máximo es {{max}}',
        multipleHandle1ValueminDetails: 'El valor es {{value}}',
        multipleHandle1ValuemaxDetails: 'El valor es {{value}}',
        multipleHandle1ValueNowDetails: 'El valor actual es {{value}}',
        multipleHandle2MinMaxDetails: 'El valor mínimo del slider de rango es {{min}}, el valor máximo es {{max}}',
        multipleHandle2ValueminDetails: 'El valor es {{value}}',
        multipleHandle2ValuemaxDetails: 'El valor es {{value}}',
        multipleHandle2ValueNowDetails: 'El valor actual es {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'Más acciones', arialLabel: 'Botón Dividir' },
    coreSplitter: { paginationItemAriaLabel: 'Sección' },
    coreStepInput: {
        incrementButtonTitle: 'Aumentar',
        decrementButtonTitle: 'Reducir',
        ariaRoleDescription: 'Entrada de paso'
    },
    coreSwitch: { semanticAcceptLabel: 'Aceptar', semanticDeclineLabel: 'Declinar' },
    coreTabs: { tabListExpandButtonText: 'Más' },
    coreText: { moreLabel: 'Más', lessLabel: 'Menos' },
    coreTime: {
        componentAriaName: 'Seleccionador de hora',
        increaseHoursLabel: 'Aumentar horas',
        hrsLabel: 'Horas',
        decreaseHoursLabel: 'Disminuir horas',
        increaseMinutesLabel: 'Aumentar minutos',
        minLabel: 'Min.',
        decreaseMinutesLabel: 'Disminuir minutos',
        increaseSecondsLabel: 'Aumentar segundos',
        secLabel: 'Seg.',
        hoursLabel: 'Horas',
        minutesLabel: 'Minutos',
        secondsLabel: 'Segundos',
        decreaseSecondsLabel: 'Disminuir segundos',
        increasePeriodLabel: 'Aumentar período',
        periodLabel: 'Periodo',
        decreasePeriodLabel: 'Disminuir período',
        navigationInstruction:
            'Para desplazarse entre elementos de esta lista, pulse la flecha hacia arriba o hacia abajo situadas arriba. Para cambiar entre listas, pulse la flecha izquierda o la flecha derecha.'
    },
    coreTimePicker: { timePickerInputLabel: 'Entrada de selector de tiempo', timePickerButtonLabel: 'Abrir selector' },
    coreToken: { deleteButtonLabel: 'Borrable', ariaRoleDescription: 'Token' },
    coreTokenizer: { moreLabel: '{{count}} más', tokenizerLabel: 'Tokenizador' },
    coreUploadCollection: {
        menuOkText: 'Aceptar',
        menuCancelText: 'Cancelar',
        menuEditAriaLabel: 'Editar',
        menuDeleteAriaLabel: 'Suprimir',
        menuOkAriaLabel: 'Editar',
        menuCancelAriaLabel: 'Cancelar',
        formItemPlaceholder: 'Nombre del archivo'
    },
    coreWizard: { ariaLabel: 'Asistente' },
    coreBreadcrumb: { overflowTitleMore: 'Más' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'Agregar nodo',
        nodeMenuButtonTitle: 'Menú',
        defaultWatchersLabel: 'Examinadores',
        defaultTitle: 'Proceso de aprobación',
        nextButtonAriaLabel: 'Ir a siguiente diapositiva',
        prevButtonAriaLabel: 'Ir a diapositiva anterior',
        editModeSaveButtonLabel: 'Guardar',
        editModeExitButtonLabel: 'Salir',
        emptyTitle: 'Iniciar la adición de responsables de aprobación y examinadores',
        emptyHint:
            'Para añadir autorizadores, haga clic en "Añadir un paso". Para añadir controladores, haga clic en el campo Controladores.',
        addNodeDialogHeaderAddApprovers: 'Agregar responsables de aprobación',
        addNodeDialogHeaderEditApprover: 'Editar responsable de aprobación',
        addNodeDialogHeaderAddApproverTeam: 'Usuario/Equipo',
        addNodeDialogHeaderDetail: 'Detalle',
        addNodeDialogNodeType: 'En paralelo o en serie',
        addNodeDialogNodeTypeSerial: 'En serie',
        addNodeDialogNodeTypeParallel: 'En paralelo',
        addNodeDialogApproverType: 'Tipo de responsable de aprobación',
        addNodeDialogApproverTypeUser: 'Un usuario',
        addNodeDialogApproverTypeTeamAnyone: 'Cualquiera en el equipo',
        addNodeDialogApproverTypeTeamEveryone: 'Todos en el equipo',
        addNodeDialogUserOrTeam: 'Usuario/Equipo',
        addNodeDialogAddToNext: 'Agregar al siguiente nodo en serie',
        addNodeDialogDueDate: 'Fecha de vencimiento',
        addNodeSearchPlaceholder: 'Buscar',
        addNodeAddActionBtnLabel: 'Agregar',
        addNodeCancelActionBtnLabel: 'Cancelar',
        addNodeSelectApproverActionBtnLabel: 'Seleccionar',
        addNodeCancelApproverSelectionActionBtnLabel: 'Cancelar',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Cerrar',
        userDetailsHeader: 'Detalle',
        userDetailsSendReminderBtnLabel: 'Enviar recordatorio',
        userDetailsCancelBtnLabel: 'Cancelar',
        messagesApproverAddedSuccess: 'Se ha agregado un responsable de aprobación',
        messagesTeamAddedSuccess: 'Se ha agregado un equipo',
        messagesNodeEdited: 'Se ha editado un responsable de aprobación',
        messagesNodeRemovedSingular: 'Se ha eliminado un responsable de aprobación',
        messagesNodeRemovedPlural: 'Se han eliminado los responsables de aprobación',
        messagesTeamRemoved: 'Se ha eliminado un equipo',
        messagesErrorBuildGraph:
            'Se ha producido un error al intentar crear el gráfico. Compruebe los datos iniciales.',
        messagesUndoAction: 'Deshacer',
        nodeMembersCount: '{{count}} miembros',
        nodeVariousTeams: 'Varios equipos',
        nodeStatusDueToday: 'Vence hoy',
        nodeStatusDueInXDays: 'Vence en {{count}} días',
        nodeStatusXDaysOverdue: 'Venció hace {{count}} días',
        nodeActionAddApproversBefore: 'Agregar responsables de aprobación antes',
        nodeActionAddApproversAfter: 'Agregar responsables de aprobación después',
        nodeActionAddApproversParallel: 'Agregar responsables de aprobación en paralelo',
        nodeActionEditApprover: 'Editar responsable de aprobación',
        nodeActionRemove: 'Eliminar',
        selectTypeDialogMoveApproverAs: 'Mover responsable de aprobación como',
        selectTypeDialogParallelOrSerial: 'En paralelo o en serie',
        selectTypeDialogNodeTypeParallel: 'Responsable de aprobación en paralelo',
        selectTypeDialogNodeTypeSerial: 'Responsable de aprobación en serie',
        selectTypeDialogConfirmButton: 'Confirmación',
        selectTypeDialogCancelButton: 'Cancelar',
        toolbarAddStepButton: 'Agregar un paso',
        toolbarEditButton: 'Editar',
        toolbarAddApproversBefore: 'Agregar responsables de aprobación antes',
        toolbarAddApproversAfter: 'Agregar responsables de aprobación después',
        toolbarAddApproversParallel: 'Agregar responsables de aprobación en paralelo',
        toolbarRemove: 'Eliminar',
        toolbarEditApprover: 'Editar responsable de aprobación',
        watchersInputPlaceholder: 'Busque aquí...',
        userListSelectedItemsCountSingular: '1 elemento seleccionado',
        userListSelectedItemsCountPlural: '{{count}} elementos seleccionados',
        statusApproved: 'aprobado',
        statusRejected: 'rechazado',
        statusInProgress: 'en curso',
        statusNotStarted: 'no iniciado'
    },
    platformFeedInput: { userTitle: 'Usuario' },
    platformVHD: {
        selectedAndConditionLabel: 'Elementos seleccionados y condiciones',
        footerClearSelectedTitle: 'borrar elementos seleccionados',
        footerClearSelectedAriaLabel: 'borrar elementos seleccionados',
        searchButtonLabel: 'Ir',
        successButtonLabel: 'Aceptar',
        cancelButtonLabel: 'Cancelar',
        selectedEmptyLabel: 'No hay elementos o condiciones seleccionados',
        searchPlaceholder: 'Buscar',
        searchAdvancedSearchLabel: 'Filtros',
        searchShowAdvancedSearchLabel: 'Mostrar filtros',
        searchHideAdvancedSearchLabel: 'Ocultar filtros',
        searchShowAllAdvancedSearchLabel: 'Visualizar todos los filtros',
        searchHideAllAdvancedSearchLabel: 'Ocultar todos los filtros',
        selectTabDisplayCountLabel: 'Elementos ({{count}})',
        selectTabMoreBtnLabel: 'Más',
        selectTabCountHiddenA11yLabel: 'contiene {{rowCount}} filas y {{colCount}} columnas',
        selectMobileTabBackBtnTitle: 'Atrás',
        selectMobileTabBtnOpenDialogLabel: 'Abrir cuadro de diálogo',
        selectMobileTabTitle: 'Pestaña {{title}}',
        selectMobileConditionEmpty: 'Vacía',
        defineConditionTitle: 'Producto',
        defineConditionSelectedValueHiddenA11yLabel: 'valor seleccionado {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Incluir',
        defineConditionConditionsGroupHeaderExclude: 'Excluir',
        defineConditionFromPlaceholder: 'de',
        defineConditionToPlaceholder: 'a',
        defineConditionValuePlaceholder: 'valor',
        defineConditionRemoveConditionButtonTitle: 'Eliminar condición',
        defineConditionAddConditionButtonLabel: 'Agregar',
        defineConditionAddConditionButtonTitle: 'Agregar condición',
        defineConditionConditionStrategyLabelContains: 'contiene',
        defineConditionConditionStrategyLabelEqualTo: 'igual a',
        defineConditionConditionStrategyLabelBetween: 'entre',
        defineConditionConditionStrategyLabelStartsWith: 'empieza por',
        defineConditionConditionStrategyLabelEndsWith: 'termina con',
        defineConditionConditionStrategyLabelLessThan: 'menos que',
        defineConditionConditionStrategyLabelLessThanEqual: 'menor o igual que',
        defineConditionConditionStrategyLabelGreaterThan: 'mayor que',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'mayor o igual que',
        defineConditionConditionStrategyLabelEmpty: 'vacío',
        defineConditionConditionStrategyLabelNotEqualTo: 'no igual a',
        defineConditionConditionStrategyLabelNotEmpty: 'no vacío',
        defineConditionMaxCountError: 'Introduzca un valor que contenga como máximo {{count}} caracteres',
        selectTabTitle: 'Seleccionar de la lista',
        searchTableEmptyMessage: 'Utilice la búsqueda para obtener resultados',
        defineTabTitle: 'Definir condiciones'
    },
    platformCombobox: {
        countListResultsSingular: '1 elemento de la lista de resultados',
        countListResultsPlural: '{{count}} elementos de la lista de resultados'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Seleccionar opciones',
        inputIconTitle: 'Seleccionar opciones',
        mobileShowAllItemsButton: 'Mostrar todos los elementos',
        mobileShowSelectedItemsButton: 'Mostrar elementos seleccionados'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 carácter por encima del límite',
        counterMessageCharactersOverTheLimitPlural: '{{count}} caracteres por encima del límite',
        counterMessageCharactersRemainingSingular: 'Queda 1 carácter',
        counterMessageCharactersRemainingPlural: '{{count}} caracteres restantes'
    },
    platformLink: { roleDescriptionWithMedia: 'Medios: {{media}}' },
    platformList: { loadingAriaLabel: 'cargando' },
    platformObjectListItem: { detailsActionAriaLabel: 'detalle', deleteActionAriaLabel: 'suprimir' },
    platformStandardListItem: { detailsActionAriaLabel: 'detalle', deleteActionAriaLabel: 'suprimir' },
    platformSearchField: {
        clearButtonTitle: 'Borrar',
        submitButtonTitle: 'Buscar',
        searchInputLabel: 'Buscar',
        synchronizeButtonTitle: 'Sincronizar',
        searchSuggestionMessage: '{{count}} sugerencias encontradas.',
        searchSuggestionNavigateMessage: 'use las flechas hacia arriba y hacia abajo para desplazarse'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Buscar',
        submitButtonLabel: 'Ir',
        filtersButtonLabel: 'Filtros ({{filtersCount}})',
        showFiltersButtonLabel: 'Mostrar filtros',
        hideFiltersButtonLabel: 'Ocultar filtros',
        defineConditionsRemoveConditionButtonTitle: 'Eliminar condición',
        defineConditionsAddConditionButtonLabel: 'Agregar condición',
        defineConditionsSubmitButtonLabel: 'Ir',
        defineConditionsCancelButton: 'Cancelar',
        selectFiltersHeader: 'Filtros',
        selectFiltersAvailableFiltersText: 'Filtros disponibles',
        selectFiltersFilterColumnLabel: 'Filtro',
        selectFiltersActiveColumnLabel: 'Activo',
        selectFiltersSubmitButtonLabel: 'Ir',
        selectFiltersCancelButton: 'Cancelar',
        filterConditionContains: 'contiene',
        filterConditionEqualTo: 'igual a',
        filterConditionBetween: 'entre',
        filterConditionBeginsWith: 'empieza por',
        filterConditionEndsWith: 'termina con',
        filterConditionLessThan: 'menos que',
        filterConditionLessThanOrEqualTo: 'menor que o igual a',
        filterConditionGreaterThan: 'mayor que',
        filterConditionGreaterThanOrEqualTo: 'mayor que o igual a',
        filterConditionAfter: 'después',
        filterConditionOnOrAfter: 'en o después',
        filterConditionBefore: 'antes',
        filterConditionBeforeOrOn: 'antes o en',
        filterConditionValuePlaceholder: 'valor',
        filterConditionValueFromPlaceholder: 'de',
        filterConditionValueToPlaceholder: 'a',
        settingsCategoryAll: 'Todos',
        settingsCategoryVisible: 'Visible',
        settingsCategoryActive: 'Activo',
        settingsCategoryVisibleAndActive: 'Visible y activa',
        settingsCategoryMandatory: 'Obligatorio',
        manageFieldConditions: 'Gestionar condiciones de campo',
        refreshButtonAriaLabel: 'Actualizar'
    },
    platformTable: {
        headerMenuSortAsc: 'Ordenación ascendente',
        headerMenuSortDesc: 'Ordenación descendente',
        headerMenuGroup: 'Grupo',
        headerMenuFreeze: 'Freeze column',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'Unfreeze column',
        headerMenuFreezePlural: 'Freeze columns',
        headerMenuUnfreezePlural: 'Unfreeze columns',
        headerMenuFilter: 'Filtro',
        defaultEmptyMessage: 'No se han encontrado datos',
        emptyCell: 'Vacía',
        noVisibleColumnsMessage:
            'En estos momentos no hay columnas visibles en la tabla. Seleccione las columnas que necesita en las opciones de tabla.',
        resetChangesButtonLabel: 'Restablecer',
        editableCellNumberPlaceholder: 'Especificar valor',
        editableCellDatePlaceholder: 'Especificar valor',
        editableCellStringPlaceholder: 'Especificar valor',
        P13ColumnsDialogHeader: 'Columnas',
        P13ColumnsDialogSearchPlaceholder: 'Buscar',
        P13ColumnsDialogsShowSelected: 'Mostrar seleccionados',
        P13ColumnsDialogShowAll: 'Mostrar todo',
        P13ColumnsDialogSelectAll: 'Seleccionar todo ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'Aceptar',
        P13ColumnsDialogCancelBtnLabel: 'Cancelar',
        P13ColumnsDialogMoveToTopBtn: 'Mover arriba',
        P13ColumnsDialogMoveUpBtn: 'Subir',
        P13ColumnsDialogMoveDownBtn: 'Bajar',
        P13ColumnsDialogMoveToBottomBtn: 'Mover abajo',
        P13FilterStrategyLabelBetween: 'entre',
        P13FilterStrategyLabelContains: 'contiene',
        P13FilterStrategyLabelBeginsWith: 'empieza con',
        P13FilterStrategyLabelEndsWith: 'termina con',
        P13FilterStrategyLabelEqualTo: 'igual a',
        P13FilterStrategyLabelGreaterThan: 'mayor que',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'mayor que o igual a',
        P13FilterStrategyLabelLessThan: 'menos que',
        P13FilterStrategyLabelLessThanOrEqualTo: 'menor que o igual a',
        P13FilterStrategyLabelAfter: 'después',
        P13FilterStrategyLabelOnOrAfter: 'en o después',
        P13FilterStrategyLabelBefore: 'antes',
        P13FilterStrategyLabelBeforeOrOn: 'antes o en',
        P13FilterStrategyLabelNotDefined: 'No definido',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'Sí',
        P13FilterBooleanOptionFalse: 'No',
        P13FilterDialogHeader: 'Filtrar por',
        P13FilterDialogIncludePanelTitleWithCount: 'Incluir ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Incluir',
        P13FilterDialogExcludePanelTitleWithCount: 'Excluir ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Excluir',
        P13FilterDialogRemoveFilterBtnTitle: 'Eliminar filtro',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'Aceptar',
        P13FilterDialogCancelBtnLabel: 'Cancelar',
        P13GroupDialogHeader: 'Grupo',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(ninguno)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Mostrar campo como columna',
        P13GroupDialogRemoveGroupBtnTitle: 'Eliminar',
        P13GroupDialogAddNewGroupBtnTitle: 'Agregar nuevo',
        P13GroupDialogConfirmationBtnLabel: 'Aceptar',
        P13GroupDialogCancelBtnLabel: 'Cancelar',
        P13SortDialogHeader: 'Ordenar',
        P13SortDialogNoneSelectedColumn: '(ninguno)',
        P13SortDialogNoneSelectedSorting: '(ninguno)',
        P13SortDialogSortOrderSelectOptionAsc: 'Ascendente',
        P13SortDialogSortOrderSelectOptionDesc: 'Descendente',
        P13SortDialogRemoveSortBtnTitle: 'Eliminar',
        P13SortDialogAddNewSortBtnTitle: 'Agregar nuevo',
        P13SortDialogConfirmationBtnLabel: 'Aceptar',
        P13SortDialogCancelBtnLabel: 'Cancelar',
        toolbarSearchPlaceholder: 'Buscar',
        toolbarActionCreateButtonLabel: 'Crear',
        toolbarActionSaveButtonLabel: 'Guardar',
        toolbarActionCancelButtonLabel: 'Cancelar',
        toolbarActionSortButtonTitle: 'Ordenar',
        toolbarActionFilterButtonTitle: 'Filtro',
        toolbarActionGroupButtonTitle: 'Grupo',
        toolbarActionColumnsButtonTitle: 'Columnas',
        toolbarActionExpandAllButtonTitle: 'Expandir todo',
        toolbarActionCollapseAllButtonTitle: 'Contraer todo',
        filterDialogNotFilteredLabel: '(No filtrado)',
        filterDialogFilterByLabel: 'Filtrar por: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtro',
        filterDialogFilterBy: 'Filtrar por',
        filterDialogConfirmBtnLabel: 'Aceptar',
        filterDialogCancelBtnLabel: 'Cancelar',
        groupDialogHeader: 'Grupo',
        groupDialogGroupOrderHeader: 'Orden de grupo',
        groupDialogGroupOrderAsc: 'Ascendente',
        groupDialogGroupOrderDesc: 'Descendente',
        groupDialogGroupByHeader: 'Agrupar por',
        groupDialogNotGroupedLabel: '(No agrupado)',
        groupDialogConfirmBtnLabel: 'Aceptar',
        groupDialogCancelBtnLabel: 'Cancelar',
        sortDialogHeader: 'Ordenar',
        sortDialogSortOrderHeader: 'Ordenación',
        sortDialogSortOrderAsc: 'Ascendente',
        sortDialogSortOrderDesc: 'Descendente',
        sortDialogSortByHeader: 'Ordenar por',
        sortDialogNotSortedLabel: '(No ordenado)',
        sortDialogConfirmBtnLabel: 'Aceptar',
        sortDialogCancelBtnLabel: 'Cancelar',
        selectAllCheckboxLabel: 'Seleccionar todos',
        deselectAllCheckboxLabel: 'Deseleccionar todo',
        deselectSingleRow: 'Pulse la barra de espaciado para anular la selección',
        selectSingleRow: 'Pulse la barra de espaciado para seleccionar líneas'
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
    platformWizardGenerator: { summarySectionEditStep: 'Editar' },
    platformMessagePopover: {
        allErrors: 'Todos',
        defaultErrors: {
            email: 'El correo electrónico no es válido',
            max: 'El campo supera el valor máximo',
            maxLength: 'El campo supera la longitud máxima',
            min: 'El valor del campo es inferior al permitido',
            minLength: 'La longitud del campo es inferior a la permitida',
            pattern: 'El valor del campo no es válido',
            required: 'El campo es obligatorio',
            requiredTrue: 'El campo es obligatorio'
        }
    },
    platformVariantManagement: {
        manage: 'Gestionar',
        saveAs: 'Guardar como',
        saveView: 'Guardar vista',
        save: 'Guardar',
        myViews: 'Mis vistas',
        view: 'Ver',
        setAsDefault: 'Establecer como predeterminado',
        public: 'Pública',
        applyAutomatically: 'Aplicar automáticamente',
        requiredFieldError: 'Este campo es obligatorio.',
        nameTakenFieldError: 'Ya existe una variante con ese nombre. Elija un nombre diferente.',
        cancel: 'Cancelar',
        manageViews: 'Gestionar vistas',
        markAsFavourite: 'Marcar como favorito',
        sharing: 'Uso compartido',
        default: 'Predeterminado',
        createdBy: 'Creado por',
        removeVariant: 'Eliminar vista',
        search: 'Buscar',
        access: { public: 'Público', private: 'Privado' }
    },
    platformSelect: { selectOptionLabel: 'Seleccione una opción' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'Expandir nodo', collapse: 'Contraer nodo', noData: 'Sin datos' }
};
