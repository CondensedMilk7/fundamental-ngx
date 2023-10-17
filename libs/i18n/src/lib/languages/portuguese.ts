/* eslint-disable max-len */
import { FdLanguage } from '../models';

export const FD_LANGUAGE_PORTUGUESE: FdLanguage = {
    coreMultiComboBox: {
        selectAllLabel: 'Selecionar tudo ({{selectedItems}} de {{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Ir para o item anterior',
        rightNavigationBtnLabel: 'Ir para o próximo item'
    },
    coreDatePicker: {
        dateInputLabel: 'Entrada de data',
        dateRangeInputLabel: 'Entrada de intervalo de datas',
        displayCalendarToggleLabel: 'Abrir selecionador',
        valueStateSuccessMessage: 'Estado de valor Êxito',
        valueStateInformationMessage: 'Estado de valor Informação',
        valueStateWarningMessage: 'Estado de valor Aviso',
        valueStateErrorMessage: 'Estado de valor Erro'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Entrada de data e hora',
        displayDatetimeToggleLabel: 'Exibir alternância de calendário',
        displayTypeDateLabel: 'Data',
        displayTypeTimeLabel: 'Hora',
        datetimeOkLabel: 'Ok',
        datetimeCancelLabel: 'Cancelar'
    },
    coreFeedListItem: {
        moreLabel: 'mais {{count}}',
        lessLabel: 'Menos'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'Cancelar',
        listItemStatusAriaLabel: 'O item tem status. Status: {{status}}.',
        listItemCounterAriaLabel: 'O item tem {{count}} derivados.',
        listItemButtonDetailsTitle: 'Detalhes',
        listItemButtonDeleteTitle: 'Excluir',
        listItemStatusContainsErrors: 'Contém erros',
        listItemStatusLocked: 'Bloqueado',
        listItemStatusDraft: 'Rascunho'
    },
    coreMessageStrip: {
        dismissLabel: 'Ignorar'
    },
    coreMultiInput: {
        multiInputAriaLabel: 'Entrada de valores múltiplos',
        noResults: 'Sem resultados.',
        navigateSelectionsWithArrows: 'Navegue pelas seleções com as setas para cima e para baixo.',
        countListResultsSingular: '1 item da lista de resultados.',
        countListResultsPlural: '{{count}} itens da lista de resultados.',
        escapeNavigateTokens:
            'Pressione escape para sair do campo de entrada e use as teclas de seta para a esquerda e para a direita para navegar pelas opções selecionadas.',
        tokensCountText: ({ length }) => {
            let plural = `${length} tokens`;
            if (length === 0) {
                plural = 'nenhum token';
            }
            if (length === 1) {
                plural = '1 token';
            }
            return `Contém ${plural}.`;
        }
    },
    coreNavigation: {
        mainNavigation: 'Navegação principal',
        navigationPath: 'Caminho de navegação'
    },
    coreNestedList: {
        linkItemAriaLabel: 'Item da árvore {{itemDetails}}, {{index}} de {{total}}{{selectedDescription}}'
    },
    coreOverflowLayout: {
        moreItemsButton: 'mais {{count}}'
    },
    corePagination: {
        pageLabel: 'Página {{pageNumber}}',
        currentPageAriaLabel: 'A página {{pageNumber}} é a página atual',
        labelBeforeInputMobile: 'Página:',
        labelAfterInputMobile: 'de {{totalCount}}',
        inputAriaLabel: 'Entrada de página, página atual, página {{pageNumber}} de {{totalCount}}',
        itemsPerPageLabel: 'Resultados por página:',
        firstLabel: 'Primeiro',
        previousLabel: 'Anterior',
        nextLabel: 'Próximo',
        lastLabel: 'Último',
        ariaLabel: 'Paginação',
        totalResultsLabel: '{{totalCount}} resultados'
    },
    coreProductSwitch: {
        ariaLabel: 'Product Switch'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'Menu de item recolhido',
        cancel: 'Cancelar',
        search: 'Pesquisar'
    },
    coreSlider: {
        singleMinMaxDetails: 'O valor mínimo do cursor é {{min}}, o valor máximo é {{max}}',
        singleValueminDetails: 'O valor é {{value}}',
        singleValuemaxDetails: 'O valor é {{value}}',
        singleValueNowDetails: 'O valor atual é {{value}}',
        multipleHandle1MinMaxDetails: 'O valor mínimo do cursor de intervalo é {{min}}, o valor máximo é {{max}}',
        multipleHandle1ValueminDetails: 'O valor é {{value}}',
        multipleHandle1ValuemaxDetails: 'O valor é {{value}}',
        multipleHandle1ValueNowDetails: 'O valor atual é {{value}}',
        multipleHandle2MinMaxDetails: 'O valor mínimo do cursor de intervalo é {{min}}, o valor máximo é {{max}}',
        multipleHandle2ValueminDetails: 'O valor é {{value}}',
        multipleHandle2ValuemaxDetails: 'O valor é {{value}}',
        multipleHandle2ValueNowDetails: 'O valor atual é {{value}}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'Mais ações',
        arialLabel: 'Botão Ratear'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'Seção'
    },
    coreStepInput: {
        incrementButtonTitle: 'Aumentar',
        decrementButtonTitle: 'Reduzir',
        ariaRoleDescription: 'Entrada de passo'
    },
    coreSwitch: {
        semanticAcceptLabel: 'Aceitar',
        semanticDeclineLabel: 'Recusar'
    },
    coreTabs: {
        tabListExpandButtonText: 'Mais'
    },
    coreText: {
        moreLabel: 'Mais',
        lessLabel: 'Menos'
    },
    coreTime: {
        componentAriaName: 'Selecionador de horas',
        increaseHoursLabel: 'Aumentar horas',
        hoursLabel: 'Horas',
        hrsLabel: 'h',
        decreaseHoursLabel: 'Reduzir horas',
        increaseMinutesLabel: 'Aumentar minutos',
        minutesLabel: 'Minutos',
        minLabel: 'min',
        decreaseMinutesLabel: 'Reduzir minutos',
        increaseSecondsLabel: 'Aumentar segundos',
        secondsLabel: 'Segundos',
        secLabel: 's',
        decreaseSecondsLabel: 'Reduzir segundos',
        increasePeriodLabel: 'Aumentar período',
        periodLabel: 'Período',
        decreasePeriodLabel: 'Reduzir período',
        navigationInstruction:
            'Para mover-se entre os itens nessa lista, pressione a seta para cima ou para baixo. Para mover-se entre as listas, pressione a seta para a esquerda ou a seta para a direita.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'Entrada de selecionador de horas',
        timePickerButtonLabel: 'Abrir selecionador'
    },
    coreToken: {
        deleteButtonLabel: 'Excluível',
        ariaRoleDescription: 'token'
    },
    coreTokenizer: {
        moreLabel: 'mais {{count}}',
        tokenizerLabel: 'Tokenizador'
    },
    coreUploadCollection: {
        menuOkText: 'Ok',
        menuCancelText: 'Cancelar',
        menuEditAriaLabel: 'Editar',
        menuDeleteAriaLabel: 'Excluir',
        menuOkAriaLabel: 'Editar',
        menuCancelAriaLabel: 'Cancelar',
        formItemPlaceholder: 'Nome do arquivo'
    },
    coreWizard: {
        ariaLabel: 'Assistente'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'Mais'
    },
    platformActionBar: {
        backButtonLabel: 'Voltar'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'Observadores',
        defaultTitle: 'Processo de aprovação',
        nextButtonAriaLabel: 'Ir para o próximo slide',
        prevButtonAriaLabel: 'Ir para o slide anterior',
        editModeSaveButtonLabel: 'Salvar',
        editModeExitButtonLabel: 'Sair',
        emptyTitle: 'Comece a adicionar aprovadores e observadores',
        emptyHint: 'Para adicionar aprovadores, clique em "Adicionar um passo". Para adicionar observadores',
        addNodeDialogHeaderAddApprovers: 'Adicionar aprovadores',
        addNodeDialogHeaderEditApprover: 'Editar aprovador',
        addNodeDialogHeaderAddApproverTeam: 'Usuário/equipe',
        addNodeDialogHeaderDetail: 'Detalhes',
        addNodeDialogNodeType: 'Paralelo ou serial',
        addNodeDialogNodeTypeSerial: 'Serial',
        addNodeDialogNodeTypeParallel: 'Paralelo',
        addNodeDialogApproverType: 'Tipo de aprovador',
        addNodeDialogApproverTypeUser: 'Um usuário',
        addNodeDialogApproverTypeTeamAnyone: 'Qualquer pessoa na equipe',
        addNodeDialogApproverTypeTeamEveryone: 'Todos na equipe',
        addNodeDialogUserOrTeam: 'Usuário/equipe',
        addNodeDialogAddToNext: 'Adicionar ao próximo nó serial',
        addNodeDialogDueDate: 'Data de vencimento',
        addNodeSearchPlaceholder: 'Pesquisar',
        addNodeAddActionBtnLabel: 'Adicionar',
        addNodeCancelActionBtnLabel: 'Cancelar',
        addNodeSelectApproverActionBtnLabel: 'Selecionar',
        addNodeCancelApproverSelectionActionBtnLabel: 'Cancelar',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Fechar',
        userDetailsHeader: 'Detalhes',
        userDetailsSendReminderBtnLabel: 'Enviar lembrete',
        userDetailsCancelBtnLabel: 'Cancelar',
        messagesApproverAddedSuccess: '1 aprovador foi adicionado',
        messagesTeamAddedSuccess: '1 equipe foi adicionada',
        messagesNodeEdited: '1 aprovador foi editado',
        messagesNodeRemovedSingular: '1 aprovador foi removido',
        messagesNodeRemovedPlural: 'Os aprovadores foram removidos',
        messagesTeamRemoved: '1 equipe foi removida',
        messagesErrorBuildGraph: 'Ocorreu um erro ao tentar criar o gráfico. Verifique os dados iniciais.',
        messagesUndoAction: 'Desfazer',
        nodeMembersCount: '{{count}} membros',
        nodeVariousTeams: 'Várias equipes',
        nodeStatusDueToday: 'Vencimento hoje',
        nodeStatusDueInXDays: ' Vencimento em {{count}} dias',
        nodeStatusXDaysOverdue: '{{count}} dias vencidos',
        nodeActionAddApproversBefore: 'Adicionar aprovadores antes',
        nodeActionAddApproversAfter: 'Adicionar aprovadores após',
        nodeActionAddApproversParallel: 'Adicionar aprovadores paralelos',
        nodeActionEditApprover: 'Editar aprovador',
        nodeActionRemove: 'Remover',
        selectTypeDialogMoveApproverAs: 'Mover aprovador como',
        selectTypeDialogParallelOrSerial: 'Paralelo ou serial',
        selectTypeDialogNodeTypeParallel: 'Aprovador paralelo',
        selectTypeDialogNodeTypeSerial: 'Aprovador serial',
        selectTypeDialogConfirmButton: 'Confirmar',
        selectTypeDialogCancelButton: 'Cancelar',
        toolbarAddStepButton: 'Adicionar um passo',
        toolbarEditButton: 'Editar',
        toolbarAddApproversBefore: 'Adicionar aprovadores antes',
        toolbarAddApproversAfter: 'Adicionar aprovadores após',
        toolbarAddApproversParallel: 'Adicionar aprovadores paralelos',
        toolbarRemove: 'Remover',
        toolbarEditApprover: 'Editar aprovador',
        watchersInputPlaceholder: 'Pesquisar aqui...',
        userListSelectedItemsCountSingular: '1 item selecionado',
        userListSelectedItemsCountPlural: '{{count}} itens selecionados',
        statusApproved: 'aprovado',
        statusRejected: 'rejeitado',
        statusInProgress: 'em andamento',
        statusNotStarted: 'não iniciado'
    },
    platformFeedInput: {
        userTitle: 'Usuário'
    },
    platformVHD: {
        selectionBarLabel: 'Itens e condições selecionados',
        selectedAndConditionLabel: 'Itens e condições selecionados',
        footerClearSelectedTitle: 'limpar itens selecionados',
        footerClearSelectedAriaLabel: 'limpar itens selecionados',
        searchButtonLabel: 'Ir',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Cancelar',
        selectedEmptyLabel: 'Nenhum item ou condição selecionada',
        searchPlaceholder: 'Pesquisar',
        searchAdvancedSearchLabel: 'Filtros',
        searchShowAdvancedSearchLabel: 'Mostrar filtros',
        searchHideAdvancedSearchLabel: 'Ocultar filtros',
        searchShowAllAdvancedSearchLabel: 'Mostrar todos os filtros',
        searchHideAllAdvancedSearchLabel: 'Ocultar todos os filtros',
        selectTabDisplayCountLabel: 'Itens ({{count}})',
        selectTabMoreBtnLabel: 'Mais',
        selectTabCountHiddenA11yLabel: 'contém {{rowCount}} linhas e {{colCount}} colunas',
        selectMobileTabBackBtnTitle: 'Voltar',
        selectMobileTabBtnOpenDialogLabel: 'Abrir caixa de diálogo',
        selectMobileTabTitle: 'Guia {{title}}',
        selectMobileConditionEmpty: 'Vazio',
        defineConditionTitle: 'Produto',
        defineConditionSelectedValueHiddenA11yLabel: 'valor selecionado {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'Incluir',
        defineConditionConditionsGroupHeaderExclude: 'Excluir',
        defineConditionFromPlaceholder: 'de',
        defineConditionToPlaceholder: 'até',
        defineConditionValuePlaceholder: 'valor',
        defineConditionRemoveConditionButtonTitle: 'Remover condição',
        defineConditionAddConditionButtonLabel: 'Adicionar',
        defineConditionAddConditionButtonTitle: 'Adicionar condição',
        defineConditionConditionStrategyLabelContains: 'contém',
        defineConditionConditionStrategyLabelEqualTo: 'igual a',
        defineConditionConditionStrategyLabelBetween: 'entre',
        defineConditionConditionStrategyLabelStartsWith: 'inicia com',
        defineConditionConditionStrategyLabelEndsWith: 'termina com',
        defineConditionConditionStrategyLabelLessThan: 'menor que',
        defineConditionConditionStrategyLabelLessThanEqual: 'menor que ou igual a',
        defineConditionConditionStrategyLabelGreaterThan: 'maior que',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'maior que ou igual a',
        defineConditionConditionStrategyLabelEmpty: 'vazio',
        defineConditionConditionStrategyLabelNotEqualTo: 'não igual a',
        defineConditionConditionStrategyLabelNotEmpty: 'não vazio',
        defineConditionMaxCountError: 'Inserir um valor com um máximo de {{count}} caracteres',
        selectTabTitle: 'Selecionar na lista',
        searchTableEmptyMessage: 'Usar a pesquisa para obter resultados',
        defineTabTitle: 'Definir condições'
    },
    platformCombobox: {
        countListResultsSingular: '1 item da lista de resultados',
        countListResultsPlural: '{{count}} itens da lista de resultados'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'Selecionar opções',
        inputIconTitle: 'Selecionar opções',
        mobileShowAllItemsButton: 'Mostrar todos os itens',
        mobileShowSelectedItemsButton: 'Mostrar itens selecionados'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 caractere acima do limite',
        counterMessageCharactersOverTheLimitPlural: '{{count}} caracteres acima do limite',
        counterMessageCharactersRemainingSingular: '1 caractere restante',
        counterMessageCharactersRemainingPlural: '{{count}} caracteres restantes'
    },
    platformLink: {
        roleDescriptionWithMedia: 'Mídia: {{media}}'
    },
    platformList: {
        loadingAriaLabel: 'carregando'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'detalhes',
        deleteActionAriaLabel: 'excluir'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'detalhes',
        deleteActionAriaLabel: 'excluir'
    },
    platformSearchField: {
        clearButtonTitle: 'Limpar',
        submitButtonTitle: 'Pesquisar',
        searchInputLabel: 'Pesquisar',
        synchronizeButtonTitle: 'Sincronizar',
        searchSuggestionMessage: '{{count}} sugestões encontradas.',
        searchSuggestionNavigateMessage: 'usar setas para cima e para baixo para navegar'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Pesquisar',
        submitButtonLabel: 'Ir',
        filtersButtonLabel: 'Filtros ({{filtersCount}})',
        showFiltersButtonLabel: 'Mostrar filtros',
        hideFiltersButtonLabel: 'Ocultar filtros',
        defineConditionsRemoveConditionButtonTitle: 'Remover condição',
        defineConditionsAddConditionButtonLabel: 'Adicionar condição',
        defineConditionsSubmitButtonLabel: 'Ir',
        defineConditionsCancelButton: 'Cancelar',
        selectFiltersHeader: 'Filtros',
        selectFiltersAvailableFiltersText: 'Filtros disponíveis',
        selectFiltersFilterColumnLabel: 'Filtro',
        selectFiltersActiveColumnLabel: 'Ativo',
        selectFiltersSubmitButtonLabel: 'Ir',
        selectFiltersCancelButton: 'Cancelar',
        filterConditionContains: 'contém',
        filterConditionEqualTo: 'igual a',
        filterConditionBetween: 'entre',
        filterConditionBeginsWith: 'inicia com',
        filterConditionEndsWith: 'termina com',
        filterConditionLessThan: 'menor que',
        filterConditionLessThanOrEqualTo: 'menor que ou igual a',
        filterConditionGreaterThan: 'maior que',
        filterConditionGreaterThanOrEqualTo: 'maior que ou igual a',
        filterConditionAfter: 'depois',
        filterConditionOnOrAfter: 'a partir de',
        filterConditionBefore: 'antes',
        filterConditionBeforeOrOn: 'até',
        filterConditionValuePlaceholder: 'valor',
        filterConditionValueFromPlaceholder: 'de',
        filterConditionValueToPlaceholder: 'até',
        settingsCategoryAll: 'Tudo',
        settingsCategoryVisible: 'Visível',
        settingsCategoryActive: 'Ativo',
        settingsCategoryVisibleAndActive: 'Visível e ativo',
        settingsCategoryMandatory: 'Obrigatório',
        manageFieldConditions: 'Gerenciar condições de campo',
        refreshButtonAriaLabel: 'Atualizar'
    },
    platformTable: {
        headerMenuSortAsc: 'Classificar em ordem crescente',
        headerMenuSortDesc: 'Classificar em ordem decrescente',
        headerMenuGroup: 'Agrupar',
        headerMenuFreeze: 'Congelar',
        headerMenuEndFreeze: 'Término do congelamento',
        headerMenuUnfreeze: 'Descongelar',
        headerMenuFilter: 'Filtrar',
        defaultEmptyMessage: 'Não foram encontrados dados',
        emptyCell: 'Vazio',
        noVisibleColumnsMessage:
            'No momento, não há colunas visíveis na tabela. Selecione as colunas de que você precisa nas configurações da tabela.',
        resetChangesButtonLabel: 'Redefinir',
        editableCellNumberPlaceholder: 'Inserir valor',
        editableCellDatePlaceholder: 'Inserir valor',
        editableCellStringPlaceholder: 'Inserir valor',
        P13ColumnsDialogHeader: 'Colunas',
        P13ColumnsDialogSearchPlaceholder: 'Pesquisar',
        P13ColumnsDialogsShowSelected: 'Mostrar selecionado(a)s',
        P13ColumnsDialogShowAll: 'Mostrar tudo',
        P13ColumnsDialogSelectAll: 'Selecionar tudo ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Cancelar',
        P13ColumnsDialogMoveToTopBtn: 'Mover para o início',
        P13ColumnsDialogMoveUpBtn: 'Mover para cima',
        P13ColumnsDialogMoveDownBtn: 'Mover para baixo',
        P13ColumnsDialogMoveToBottomBtn: 'Mover para o fim',
        P13FilterStrategyLabelBetween: 'entre',
        P13FilterStrategyLabelContains: 'contém',
        P13FilterStrategyLabelBeginsWith: 'começa com',
        P13FilterStrategyLabelEndsWith: 'termina com',
        P13FilterStrategyLabelEqualTo: 'igual a',
        P13FilterStrategyLabelGreaterThan: 'maior que',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'maior que ou igual a',
        P13FilterStrategyLabelLessThan: 'menor que',
        P13FilterStrategyLabelLessThanOrEqualTo: 'menor que ou igual a',
        P13FilterStrategyLabelAfter: 'depois',
        P13FilterStrategyLabelOnOrAfter: 'a partir de',
        P13FilterStrategyLabelBefore: 'antes',
        P13FilterStrategyLabelBeforeOrOn: 'até',
        P13FilterStrategyLabelNotDefined: 'Não definido',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'Sim',
        P13FilterBooleanOptionFalse: 'Não',
        P13FilterDialogHeader: 'Filtrar por',
        P13FilterDialogIncludePanelTitleWithCount: 'Incluir ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Incluir',
        P13FilterDialogExcludePanelTitleWithCount: 'Excluir ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Excluir',
        P13FilterDialogRemoveFilterBtnTitle: 'Remover filtro',
        P13FilterDialoAddFilterBtnTitle: 'Adicionar filtro',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Cancelar',
        P13GroupDialogHeader: 'Agrupar',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(nenhum)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Mostrar campo como coluna',
        P13GroupDialogRemoveGroupBtnTitle: 'Remover',
        P13GroupDialogAddNewGroupBtnTitle: 'Adicionar novo',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Cancelar',
        P13SortDialogHeader: 'Classificar',
        P13SortDialogNoneSelectedColumn: '(nenhum)',
        P13SortDialogNoneSelectedSorting: '(nenhum)',
        P13SortDialogSortOrderSelectOptionAsc: 'Crescente',
        P13SortDialogSortOrderSelectOptionDesc: 'Decrescente',
        P13SortDialogRemoveSortBtnTitle: 'Remover',
        P13SortDialogAddNewSortBtnTitle: 'Adicionar novo',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Cancelar',
        toolbarSearchPlaceholder: 'Pesquisar',
        toolbarActionCreateButtonLabel: 'Criar',
        toolbarActionSaveButtonLabel: 'Salvar',
        toolbarActionCancelButtonLabel: 'Cancelar',
        toolbarActionSortButtonTitle: 'Classificar',
        toolbarActionFilterButtonTitle: 'Filtrar',
        toolbarActionGroupButtonTitle: 'Agrupar',
        toolbarActionColumnsButtonTitle: 'Colunas',
        toolbarActionExpandAllButtonTitle: 'Expandir tudo',
        toolbarActionCollapseAllButtonTitle: 'Recolher tudo',
        filterDialogNotFilteredLabel: '(Não filtrado)',
        filterDialogFilterByLabel: 'Filtrar por: {{filterLabel}}',
        filterDialogFilterTitle: 'Filtrar',
        filterDialogFilterBy: 'Filtrar por',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Cancelar',
        groupDialogHeader: 'Agrupar',
        groupDialogGroupOrderHeader: 'Ordem do grupo',
        groupDialogGroupOrderAsc: 'Crescente',
        groupDialogGroupOrderDesc: 'Decrescente',
        groupDialogGroupByHeader: 'Agrupar por',
        groupDialogNotGroupedLabel: '(Não agrupado)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Cancelar',
        sortDialogHeader: 'Classificar',
        sortDialogSortOrderHeader: 'Ordem de classificação',
        sortDialogSortOrderAsc: 'Crescente',
        sortDialogSortOrderDesc: 'Decrescente',
        sortDialogSortByHeader: 'Classificar por',
        sortDialogNotSortedLabel: '(Não classificado)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Cancelar',
        selectAllCheckboxLabel: 'Selecionar tudo',
        deselectAllCheckboxLabel: 'Desmarcar tudo',
        deselectSingleRow: 'Para desmarcar a linha, pressione a BARRA DE ESPAÇOS',
        selectSingleRow: 'Para selecionar a linha, pressione a BARRA DE ESPAÇOS',
        deselectSingleRowTitle: 'Clique para desmarcar',
        selectSingleRowTitle: 'Clique para selecionar'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Ir para o anterior',
        detailsGotoNextButtonTitle: 'Ir para o próximo',
        detailsDialogCloseBtnLabel: 'Fechar',
        roleDescription: 'Imagem'
    },
    platformUploadCollection: {
        moveToTitle: 'Mover para',
        moveToTitleFolder: 'Pasta',
        moveToNewFolderBtnLabel: 'Nova pasta',
        moveToAllFilesSubHeaderLabel: 'Todos os arquivos',
        moveToConfirmBtn: 'Mover',
        moveToCloseBtn: 'Cancelar',
        newFolderTitle: 'Nova pasta',
        newFolderAtRootInputLabel: 'Nome da nova pasta',
        newFolderAtFolderInputLabel: 'Nome da nova pasta dentro de {{folderName}}',
        newFolderInputPlaceholder: 'Digitar aqui...',
        newFolderInputErrorLabel: 'É permitido no máximo {{count}} caracteres',
        newFolderDialogCreateBtnLabel: 'Criar',
        newFolderDialogCancelBtnLabel: 'Cancelar',
        breadcrumbLabelAllFiles: 'Todos os arquivos',
        breadcrumbLabelAllFilesWithTotal: 'Todos os arquivos ({{total}})',
        searchPlaceholder: 'Pesquisar',
        addBtnLabel: 'Adicionar',
        newFolderBtnLabel: 'Nova pasta',
        moveToBtnLabel: 'Mover para',
        downloadBtnLabel: 'Fazer download',
        updateVersionBtnLabel: 'Atualizar versão',
        removeBtnLabel: 'Remover',
        folderIconTitle: 'Ícone de pasta',
        fileIconTitle: 'Ícone de arquivo',
        editFileNameInputPlaceholder: 'Inserir um nome',
        editFileNameFileAlreadyExistsError: 'Já existe um arquivo com este nome',
        editFileNameFolderAlreadyExistsError: 'Já existe uma pasta com este nome',
        itemStatusSuccessful: 'Com êxito',
        itemStatusUnsuccessful: 'Sem êxito',
        uploadNewFileAfterFailAction: 'Executar',
        cancelUploadNewFileAction: 'Cancelar',
        itemMenuBtnTitle: 'Mais',
        dragDropAreaText: 'Arrastar arquivos para carregar',
        noDataText: 'Nenhum arquivo encontrado',
        noDataDescription: 'Soltar arquivos para carregar ou usar o botão ‚ÄúAdicionar‚Äù.',
        paginationTotal: 'Mostrando {{from}}-{{to}} de {{total}}',
        resultsPerPage: 'Resultados por página',
        messageCreateFailed: 'Falha ao criar {{folderName}}.',
        messageCreateSuccess: '{{folderName}} foi criado.',
        messageUpdateVersionFailed: 'Falha ao atualizar versão de {{folderName}}.',
        messageUpdateVersionSuccess: 'A versão de {{folderName}} foi atualizada.',
        messageFileRenameFailed: 'Falha ao renomear "{{from}}" para "{{to}}."',
        messageFileRenameSuccess: '"{{from}}" foi renomeado para "{{to}}".',
        messageRemoveFoldersAndFilesFailed: 'Falha ao remover {{foldersCount}} pastas e {{filesCount}} arquivos.',
        messageRemoveFoldersAndFilesSuccess: '{{foldersCount}} pastas e {{filesCount}} arquivos foram removidos.',
        messageRemoveFoldersFailed: 'Falha ao remover {{foldersCount}} pastas.',
        messageRemoveFoldersSuccess: '{{foldersCount}} pastas foram removidas.',
        messageRemoveFilesFailed: 'Falha ao remover {{filesCount}} arquivos.',
        messageRemoveFilesSuccess: '{{filesCount}} arquivos foram removidos.',
        messageRemoveFileOrFolderFailed: 'Falha ao remover {{name}}.',
        messageRemoveFileOrFolderSuccess: '{{name}} foi removido(a).',
        messageMoveFoldersAndFilesFailed:
            'Falha ao mover {{foldersCount}} pastas e {{filesCount}} arquivos para {{to}}.',
        messageMoveFoldersAndFilesSuccess:
            '{{foldersCount}} pastas e {{filesCount}} arquivos foram movidos para {{to}}.',
        messageMoveFoldersFailed: 'Falha ao mover {{foldersCount}} pastas para {{to}}.',
        messageMoveFoldersSuccess: '{{foldersCount}} pastas foram movidas para {{to}}.',
        messageMoveFilesFailed: 'Falha ao mover {{filesCount}} arquivos para {{to}}.',
        messageMoveFilesSuccess: '{{filesCount}} arquivos foram movidos para {{to}}.',
        messageMoveFileOrFolderFailed: 'Falha ao mover {{name}} para {{to}}.',
        messageMoveFileOrFolderSuccess: '{{name}} foi movido para {{to}}.',
        messageMoveRootFoldersAndFilesFailed:
            'Falha ao mover {{foldersCount}} pastas e {{filesCount}} arquivos para todos os arquivos.',
        messageMoveRootFoldersAndFilesSuccess:
            '{{foldersCount}} pastas e {{filesCount}} arquivos foram movidos para todos os arquivos.',
        messageMoveRootFoldersFailed: 'Falha ao mover {{foldersCount}} pastas para todos os arquivos.',
        messageMoveRootFoldersSuccess: '{{foldersCount}} pastas foram movidas para todos os arquivos.',
        messageMoveRootFilesFailed: 'Falha ao mover {{filesCount}} arquivos para todos os arquivos.',
        messageMoveRootFilesSuccess: '{{filesCount}} arquivos foram movidos para todos os arquivos.',
        messageMoveRootFileOrFolderFailed: 'Falha ao mover {{name}} para todos os arquivos.',
        messageMoveRootFileOrFolderSuccess: '{{name}} foi movido(a) para todos os arquivos',
        messageFileTypeMismatchPlural:
            '{{filesCount}} arquivos têm o tipo incorreto. Tipos permitidos: {{allowedTypes}}.',
        messageFileTypeMismatchSingular:
            'O arquivo "{{fileName}}" tem o tipo incorreto. Tipos permitidoss: {{allowedTypes}}.',
        messageFileSizeExceededPlural:
            '{{filesCount}} arquivos excederam o tamanho máximo de arquivo. Tamanho máximo permitido: {{maxFileSize}}.',
        messageFileSizeExceededSingular:
            'O arquivo "{{fileName}}" excedeu o tamanho máximo de arquivo. Tamanho máximo permitido: {{maxFileSize}}.',
        messageFileNameLengthExceededPlural:
            '{{filesCount}} arquivos excederam o comprimento máximo de nome de arquivo. Comprimento de nome de arquivo permitido: {{maxFilenameLength}} caracteres.',
        messageFileNameLengthExceededSingular:
            'O nome "{{fileName}}" excedeu o comprimento máximo de nome de arquivo. Comprimento de nome de arquivo permitido: {{maxFilenameLength}} caracteres.'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'Editar'
    },
    platformMessagePopover: {
        allErrors: 'Tudo',
        defaultErrors: {
            email: 'O e-mail é inválido',
            max: 'O campo excede o valor máximo',
            maxLength: 'O campo excede o comprimento máximo',
            min: 'O valor do campo é inferior ao permitido',
            minLength: 'O comprimento do campo é inferior ao permitido',
            pattern: 'O valor do campo é inválido',
            required: 'O campo é obrigatório',
            requiredTrue: 'O campo é obrigatório'
        }
    },
    platformVariantManagement: {
        manage: 'Gerenciar',
        saveAs: 'Salvar como',
        saveView: 'Salvar visualização',
        save: 'Salvar',
        myViews: 'Minhas visualizações',
        view: 'Exibir',
        setAsDefault: 'Definir como padrão',
        public: 'Público',
        applyAutomatically: 'Aplicar automaticamente',
        requiredFieldError: 'Este campo é obrigatório.',
        nameTakenFieldError: 'Já existe uma variante com este nome. Escolha um nome diferente.',
        cancel: 'Cancelar',
        manageViews: 'Gerenciar visualizações',
        markAsFavourite: 'Marcar como favorito',
        sharing: 'Compartilhamento',
        default: 'Padrão',
        createdBy: 'Criado por',
        removeVariant: 'Remover visualização',
        search: 'Pesquisar',
        access: {
            public: 'Público',
            private: 'Privado'
        }
    },
    platformSelect: {
        selectOptionLabel: 'Selecionar uma opção'
    },
    fnSlider: {
        minMaxDetails: 'O valor mínimo do cursor é {{min}}, o valor máximo é {{max}}',
        valueminDetails: 'O valor é {{value}}',
        valuemaxDetails: 'O valor é {{value}}',
        valueNowDetails: 'O valor atual é {{value}}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'Aceitar',
        semanticDeclineLabel: 'Recusar'
    },
    coreTree: {
        expand: 'Expandir nó',
        collapse: 'Recolher nó',
        noData: 'Não há dados'
    }
};
