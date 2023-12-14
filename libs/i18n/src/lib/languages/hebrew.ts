/* eslint-disable */
import { FdLanguage } from '../models/lang';

export const FD_LANGUAGE_HEBREW: FdLanguage = {
    coreCalendar: {
        yearSelectionLabel: 'בחר שנה',
        yearsRangeSelectionLabel: 'בחר טווחי שנים',
        monthSelectionLabel: 'בחר חודש',
        dateSelectionLabel: 'בחר תאריך',
        previousYearLabel: 'השנה הקודמת',
        nextYearLabel: 'שנה הבאה',
        previousMonthLabel: 'החודש הקודם',
        nextMonthLabel: 'חודש הבא',
        weekColumnLabel: 'שבוע קלנדרי',
        dateSelectedLabel: 'בחר תאריך',
        todayLabel: 'היום',
        rangeStartLabel: 'תחילת טווח',
        rangeEndLabel: 'סוף טווח',
        dayInPastLabel: 'ימים קודמים',
        closeCalendarLabel: 'סגירת לוח שנה',
        calendarDayViewDescription: 'לוח שנה',
        calendarMonthViewDescription: 'בוחר חודש',
        calendarYearsViewDescription: 'בוחר שנה',
        calendarYearsRangeViewDescription: 'בוחר טווח שנים'
    },
    coreMultiComboBox: {
        multiComboBoxAriaLabel: 'Multi Value Combo Box',
        selectAllLabel: 'בחר הכול ({{selectedItems}} מתוך {{totalItems}})'
    },
    coreCarousel: { leftNavigationBtnLabel: 'עבור לפריט הקודם', rightNavigationBtnLabel: 'עבור לפריט הבא' },
    coreDatePicker: {
        dateInputLabel: 'קלט של תאריך',
        dateRangeInputLabel: 'קלט של טווח תאריכים',
        displayCalendarToggleLabel: 'פתח בוחר',
        valueStateSuccessMessage: 'מצב הערך – הצלחה',
        valueStateInformationMessage: 'מידע על מצב ערך',
        valueStateWarningMessage: 'מצב הערך – אזהרה',
        valueStateErrorMessage: 'מצב הערך – שגיאה'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'קלט של תאריך/שעה',
        displayDatetimeToggleLabel: 'הצג לוח שנה',
        displayTypeDateLabel: 'תאריך',
        displayTypeTimeLabel: 'זמן',
        datetimeOkLabel: 'OK',
        datetimeCancelLabel: 'בטל'
    },
    coreFeedListItem: { moreLabel: '{{count}} נוספים', lessLabel: 'פחות' },
    coreGridList: {
        filterBarCancelButtonTitle: 'בטל',
        listItemStatusAriaLabel: 'לפריט יש סטאטוס. סטאטוס: {{status}}.',
        listItemCounterAriaLabel: 'לפריט יש {{count}} בנים.',
        listItemButtonDetailsTitle: 'פרטים',
        listItemButtonDeleteTitle: 'מחק',
        listItemStatusContainsErrors: 'מכיל שגיאות',
        listItemStatusLocked: 'נעול',
        listItemStatusDraft: 'טיוטה'
    },
    coreMessageStrip: { dismissLabel: 'בטל' },
    coreMultiInput: {
        multiInputAriaLabel: 'קלט עם ערכים מרובים',
        noResults: 'אין תוצאות.',
        navigateSelectionsWithArrows: 'נווט בבחירות עם החצים למעלה ולמטה.',
        countListResultsSingular: 'פריט רשימת תוצאות אחד.',
        countListResultsPlural: '{{count}} פריטי רשימת תוצאות.',
        escapeNavigateTokens:
            'הקש על Escape כדי לצאת משדה הקלט והשתמש במקשי החצים שמאלה וימינה כדי לנווט בין האפשרויות שנבחרו.',
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
    coreNavigation: { mainNavigation: 'ניווט ראשי', navigationPath: 'נתיב ניווט' },
    coreNestedList: { linkItemAriaLabel: 'פריט עץ {{itemDetails}}, {{index}} מתוך {{total}}{{selectedDescription}}' },
    coreOverflowLayout: { moreItemsButton: '{{count}} נוספים' },
    corePagination: {
        pageLabel: 'דף {{pageNumber}}',
        currentPageAriaLabel: 'דף {{pageNumber}} הוא הדף הנוכחי',
        labelBeforeInputMobile: 'דף:',
        labelAfterInputMobile: 'מתוך {{totalCount}}',
        inputAriaLabel: 'קלט דף, דף נוכחי, דף {{pageNumber}} מתוך {{totalCount}}',
        itemsPerPageLabel: 'תוצאות לכל עמוד:',
        firstLabel: 'ראשון',
        previousLabel: 'הקודם',
        nextLabel: 'הבא',
        lastLabel: 'אחרון',
        ariaLabel: 'עימוד',
        totalResultsLabel: '{{totalCount}} תוצאות'
    },
    coreProductSwitch: { ariaLabel: 'מתג מוצר' },
    coreShellbar: { collapsedItemMenuLabel: 'תפריט פריט מכווץ', cancel: 'בטל', search: 'חפש' },
    coreSlider: {
        singleMinMaxDetails: 'הערך המינימלי של המחוון הוא {{min}}, הערך המקסימלי הוא {{max}}',
        singleValueminDetails: 'הערך הוא {{value}}',
        singleValuemaxDetails: 'הערך הוא {{value}}',
        singleValueNowDetails: 'הערך הנוכחי הוא {{value}}',
        multipleHandle1MinMaxDetails: 'הערך המינימלי של מחוון טווח הוא {{min}}, הערך המקסימלי הוא {{max}}',
        multipleHandle1ValueminDetails: 'הערך הוא {{value}}',
        multipleHandle1ValuemaxDetails: 'הערך הוא {{value}}',
        multipleHandle1ValueNowDetails: 'הערך הנוכחי הוא {{value}}',
        multipleHandle2MinMaxDetails: 'הערך המינימלי של מחוון טווח הוא {{min}}, הערך המקסימלי הוא {{max}}',
        multipleHandle2ValueminDetails: 'הערך הוא {{value}}',
        multipleHandle2ValuemaxDetails: 'הערך הוא {{value}}',
        multipleHandle2ValueNowDetails: 'הערך הנוכחי הוא {{value}}'
    },
    coreSplitButton: { expandButtonAriaLabel: 'עוד פעולות', arialLabel: 'לחצן פיצול' },
    coreSplitter: { paginationItemAriaLabel: 'מקטע' },
    coreStepInput: { incrementButtonTitle: 'מרווח', decrementButtonTitle: 'ירידה', ariaRoleDescription: 'קלט שלב' },
    coreSwitch: { semanticAcceptLabel: 'קבל', semanticDeclineLabel: 'דחה' },
    coreTabs: { tabListExpandButtonText: 'עוד' },
    coreText: { moreLabel: 'עוד', lessLabel: 'פחות' },
    coreTime: {
        componentAriaName: 'בוחר שעה',
        increaseHoursLabel: 'הגדל שעות',
        hrsLabel: 'שעות',
        decreaseHoursLabel: 'הפחת שעות',
        increaseMinutesLabel: 'הגדל דקות',
        minLabel: 'דקה',
        decreaseMinutesLabel: 'הקטן דקות',
        increaseSecondsLabel: 'הגדל שניות',
        secLabel: 'שניות',
        hoursLabel: 'שעות',
        minutesLabel: 'דקות',
        secondsLabel: 'שניות',
        decreaseSecondsLabel: 'הקטן שניות',
        increasePeriodLabel: 'הגדל תקופה',
        periodLabel: 'תקופה',
        decreasePeriodLabel: 'הקטן תקופה',
        navigationInstruction:
            'כדי לעבור בין פריטים ברשימה זו, הקש על החץ העליון או החץ התחתון. כדי לעבור בין רשימות לחץ על חץ שמאלה או חץ ימינה.'
    },
    coreTimePicker: { timePickerInputLabel: 'קלט בוחר שעות', timePickerButtonLabel: 'פתח בוחר' },
    coreToken: { deleteButtonLabel: 'ניתן למחיקה', ariaRoleDescription: 'אסימון' },
    coreTokenizer: { moreLabel: '{{count}} נוספים', tokenizerLabel: 'Tokenizer' },
    coreUploadCollection: {
        menuOkText: 'OK',
        menuCancelText: 'בטל',
        menuEditAriaLabel: 'ערוך',
        menuDeleteAriaLabel: 'מחק',
        menuOkAriaLabel: 'ערוך',
        menuCancelAriaLabel: 'בטל',
        formItemPlaceholder: 'שם קובץ'
    },
    coreWizard: { ariaLabel: 'אשף' },
    coreBreadcrumb: { overflowTitleMore: 'עוד' },
    platformActionBar: { backButtonLabel: 'Go Back' },
    platformApprovalFlow: {
        addNodeButtonTitle: 'הוסף צומת',
        nodeMenuButtonTitle: 'תפריט',
        defaultWatchersLabel: 'צופים',
        defaultTitle: 'תהליך אישור',
        nextButtonAriaLabel: 'עבור לשקופית הבאה',
        prevButtonAriaLabel: 'עבור לשקופית הקודמת',
        editModeSaveButtonLabel: 'שמור',
        editModeExitButtonLabel: 'צא',
        emptyTitle: 'התחל בהוספת מאשרים וצופים',
        emptyHint: "כדי להוסיף מאשרים לחץ על 'הוסף שלב'. כדי להוסיף צופים, לחץ על השדה 'צופים'.",
        addNodeDialogHeaderAddApprovers: 'הוסף מאשרים',
        addNodeDialogHeaderEditApprover: 'ערוך מאשר',
        addNodeDialogHeaderAddApproverTeam: 'משתמש/צוות',
        addNodeDialogHeaderDetail: 'פרטים',
        addNodeDialogNodeType: 'מקביל או טורי',
        addNodeDialogNodeTypeSerial: 'סדרתי',
        addNodeDialogNodeTypeParallel: 'מקביל',
        addNodeDialogApproverType: 'סוג מאשר',
        addNodeDialogApproverTypeUser: 'משתמש',
        addNodeDialogApproverTypeTeamAnyone: 'כל אחד בצוות',
        addNodeDialogApproverTypeTeamEveryone: 'כולם בצוות',
        addNodeDialogUserOrTeam: 'משתמש/צוות',
        addNodeDialogAddToNext: 'הוסף לצומת הטורי הבא',
        addNodeDialogDueDate: 'תאריך יעד',
        addNodeSearchPlaceholder: 'חפש',
        addNodeAddActionBtnLabel: 'הוסף',
        addNodeCancelActionBtnLabel: 'בטל',
        addNodeSelectApproverActionBtnLabel: 'בחר',
        addNodeCancelApproverSelectionActionBtnLabel: 'בטל',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'סגור',
        userDetailsHeader: 'פרטים',
        userDetailsSendReminderBtnLabel: 'שלח תזכורת',
        userDetailsCancelBtnLabel: 'בטל',
        messagesApproverAddedSuccess: 'מאשר אחד נוסף',
        messagesTeamAddedSuccess: 'צוות אחד נוסף',
        messagesNodeEdited: 'מאשר אחד נערך',
        messagesNodeRemovedSingular: 'מאשר אחד הוסר',
        messagesNodeRemovedPlural: 'המאשרים הוסרו',
        messagesTeamRemoved: 'צוות אחד הוסר',
        messagesErrorBuildGraph: 'אירעה שגיאה בעת ניסיון לבנות גרף. בדוק את הנתונים ההתחלתיים.',
        messagesUndoAction: 'בטל',
        nodeMembersCount: '{{count}} איברים',
        nodeVariousTeams: 'צוותים שונים',
        nodeStatusDueToday: 'תאריך היעד הוא היום',
        nodeStatusDueInXDays: 'תאריך היעד בעוד {{count}} ימים',
        nodeStatusXDaysOverdue: '{{count}} ימים באיחור',
        nodeActionAddApproversBefore: 'הוסף מאשרים לפני',
        nodeActionAddApproversAfter: 'הוסף מאשרים לאחר',
        nodeActionAddApproversParallel: 'הוסף מאשרים מקבילים',
        nodeActionEditApprover: 'ערוך מאשר',
        nodeActionRemove: 'הסר',
        selectTypeDialogMoveApproverAs: 'העבר מאשר כ-',
        selectTypeDialogParallelOrSerial: 'מקביל או טורי',
        selectTypeDialogNodeTypeParallel: 'מאשר מקביל',
        selectTypeDialogNodeTypeSerial: 'מאשר טורי',
        selectTypeDialogConfirmButton: 'אשר',
        selectTypeDialogCancelButton: 'בטל',
        toolbarAddStepButton: 'הוסף שלב',
        toolbarEditButton: 'ערוך',
        toolbarAddApproversBefore: 'הוסף מאשרים לפני',
        toolbarAddApproversAfter: 'הוסף מאשרים לאחר',
        toolbarAddApproversParallel: 'הוסף מאשרים מקבילים',
        toolbarRemove: 'הסר',
        toolbarEditApprover: 'ערוך מאשר',
        watchersInputPlaceholder: 'חפש כאן..',
        userListSelectedItemsCountSingular: 'פריט 1 נבחר',
        userListSelectedItemsCountPlural: '{{count}} פריטים נבחרו',
        statusApproved: 'אושר',
        statusRejected: 'נדחה',
        statusInProgress: 'בתהליך',
        statusNotStarted: 'טרם התחיל'
    },
    platformFeedInput: { userTitle: 'משתמש' },
    platformVHD: {
        selectionBarLabel: 'פריטים ותנאים שנבחרו',
        selectedAndConditionLabel: 'פריטים ותנאים שנבחרו',
        footerClearSelectedTitle: 'נקה פריטים נבחרים',
        footerClearSelectedAriaLabel: 'נקה פריטים נבחרים',
        searchButtonLabel: 'בצע',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'בטל',
        selectedEmptyLabel: 'לא נבחרו פריטים או תנאים',
        searchPlaceholder: 'חפש',
        searchAdvancedSearchLabel: 'מסננים',
        searchShowAdvancedSearchLabel: 'הצג מסננים',
        searchHideAdvancedSearchLabel: 'הסתר מסננים',
        searchShowAllAdvancedSearchLabel: 'הצג את כל המסננים',
        searchHideAllAdvancedSearchLabel: 'הסתר את כל המסננים',
        selectTabDisplayCountLabel: 'פריטים ({{count}})',
        selectTabMoreBtnLabel: 'עוד',
        selectTabCountHiddenA11yLabel: 'מכיל {{rowCount}} שורות ו-{{colCount}} עמודות',
        selectMobileTabBackBtnTitle: 'חזור',
        selectMobileTabBtnOpenDialogLabel: 'פתח דיאלוג',
        selectMobileTabTitle: '{{title}} כרטיסייה',
        selectMobileConditionEmpty: 'ריק',
        defineConditionTitle: 'מוצר',
        defineConditionSelectedValueHiddenA11yLabel: 'ערך שנבחר {{value}}',
        defineConditionConditionsGroupHeaderInclude: 'כלול',
        defineConditionConditionsGroupHeaderExclude: 'אל תכלול',
        defineConditionFromPlaceholder: 'מ-',
        defineConditionToPlaceholder: 'אל',
        defineConditionValuePlaceholder: 'ערך',
        defineConditionRemoveConditionButtonTitle: 'הסר תנאי',
        defineConditionAddConditionButtonLabel: 'הוסף',
        defineConditionAddConditionButtonTitle: 'הוסף תנאי',
        defineConditionConditionStrategyLabelContains: 'מכיל',
        defineConditionConditionStrategyLabelEqualTo: 'שווה ל-',
        defineConditionConditionStrategyLabelBetween: 'בין',
        defineConditionConditionStrategyLabelStartsWith: 'מתחיל ב-',
        defineConditionConditionStrategyLabelEndsWith: 'מסתיים ב-',
        defineConditionConditionStrategyLabelLessThan: 'קטן מ-',
        defineConditionConditionStrategyLabelLessThanEqual: 'קטן מ- או שווה ל-',
        defineConditionConditionStrategyLabelGreaterThan: 'גדול מ-',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'גדול מ- או שווה ל-',
        defineConditionConditionStrategyLabelEmpty: 'ריק',
        defineConditionConditionStrategyLabelNotEqualTo: 'לא שווה ל-',
        defineConditionConditionStrategyLabelNotEmpty: 'לא ריק',
        defineConditionMaxCountError: 'הזן ערך {{count}} תווים לכל היותר.',
        selectTabTitle: 'בחר מרשימה',
        searchTableEmptyMessage: 'השתמש בחיפוש לקבלת תוצאות',
        defineTabTitle: 'הגדר תנאים'
    },
    platformCombobox: {
        countListResultsSingular: 'פריט רשימת תוצאות אחד',
        countListResultsPlural: '{{count}} פריטי רשימת תוצאות'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'בחר אפשרויות',
        inputIconTitle: 'בחר אפשרויות',
        mobileShowAllItemsButton: 'הצג את כל הפריטים',
        mobileShowSelectedItemsButton: 'הצג פריטים נבחרים'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: 'תו אחד יותר מהמגבלה',
        counterMessageCharactersOverTheLimitPlural: '{{count}} תווים מעבר למגבלה',
        counterMessageCharactersRemainingSingular: 'נשאר תו אחד',
        counterMessageCharactersRemainingPlural: 'נותרו {{count}} תווים'
    },
    platformLink: { roleDescriptionWithMedia: 'מדיה: {{media}}' },
    platformList: { loadingAriaLabel: 'טוען' },
    platformObjectListItem: { detailsActionAriaLabel: 'פירוט', deleteActionAriaLabel: 'מחק' },
    platformStandardListItem: { detailsActionAriaLabel: 'פירוט', deleteActionAriaLabel: 'מחק' },
    platformSearchField: {
        clearButtonTitle: 'נקה',
        submitButtonTitle: 'חפש',
        searchInputLabel: 'חפש',
        synchronizeButtonTitle: 'סנכרן',
        searchSuggestionMessage: 'נמצאו {{count}} הצעות.',
        searchSuggestionNavigateMessage: 'השתמש בחצים למעלה ולמטה כדי לנווט'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'חפש',
        submitButtonLabel: 'בצע',
        filtersButtonLabel: 'מסננים ({{filtersCount}})',
        showFiltersButtonLabel: 'הצג מסננים',
        hideFiltersButtonLabel: 'הסתר מסננים',
        defineConditionsRemoveConditionButtonTitle: 'הסר תנאי',
        defineConditionsAddConditionButtonLabel: 'הוסף תנאי',
        defineConditionsSubmitButtonLabel: 'בצע',
        defineConditionsCancelButton: 'בטל',
        selectFiltersHeader: 'מסננים',
        selectFiltersAvailableFiltersText: 'מסננים זמינים',
        selectFiltersFilterColumnLabel: 'מסנן',
        selectFiltersActiveColumnLabel: 'פעיל',
        selectFiltersSubmitButtonLabel: 'בצע',
        selectFiltersCancelButton: 'בטל',
        filterConditionContains: 'מכיל',
        filterConditionEqualTo: 'שווה ל-',
        filterConditionBetween: 'בין',
        filterConditionBeginsWith: 'מתחיל ב-',
        filterConditionEndsWith: 'מסתיים ב-',
        filterConditionLessThan: 'קטן מ-',
        filterConditionLessThanOrEqualTo: 'קטן מ- או שווה ל-',
        filterConditionGreaterThan: 'גדול מ-',
        filterConditionGreaterThanOrEqualTo: 'גדול מ- או שווה ל-',
        filterConditionAfter: 'לאחר',
        filterConditionOnOrAfter: 'בתאריך או לאחר מכן',
        filterConditionBefore: 'לפני',
        filterConditionBeforeOrOn: 'לפני או ב-',
        filterConditionValuePlaceholder: 'ערך',
        filterConditionValueFromPlaceholder: 'מ-',
        filterConditionValueToPlaceholder: 'אל',
        settingsCategoryAll: 'הכול',
        settingsCategoryVisible: 'גלוי',
        settingsCategoryActive: 'פעיל',
        settingsCategoryVisibleAndActive: 'גלוי ופעיל',
        settingsCategoryMandatory: 'חובה',
        manageFieldConditions: 'נהל תנאי שדה',
        refreshButtonAriaLabel: 'רענן'
    },
    platformTable: {
        headerMenuSortAsc: 'מיין בסדר עולה',
        headerMenuSortDesc: 'מיין בסדר יורד',
        headerMenuGroup: 'קבוצה',
        headerMenuFreeze: 'הקפא',
        headerMenuEndFreeze: 'הקפא לסוף',
        headerMenuUnfreeze: 'בטל הקפאה',
        headerMenuFilter: 'מסנן',
        defaultEmptyMessage: 'לא נמצאו נתונים',
        emptyCell: 'ריק',
        noVisibleColumnsMessage: 'כרגע, אין עמודות גלויות בטבלה. בחר את העמודות הנדרשות בהגדרות הטבלה.',
        resetChangesButtonLabel: 'אפס',
        editableCellNumberPlaceholder: 'הזן ערך',
        editableCellDatePlaceholder: 'הזן ערך',
        editableCellStringPlaceholder: 'הזן ערך',
        P13ColumnsDialogHeader: 'עמודות',
        P13ColumnsDialogSearchPlaceholder: 'חפש',
        P13ColumnsDialogsShowSelected: 'הצג נבחרים',
        P13ColumnsDialogShowAll: 'הצג הכול',
        P13ColumnsDialogSelectAll: 'בחר הכול ({{selectedColumnsCount}}/{{selectableColumnsCount}})',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'בטל',
        P13ColumnsDialogMoveToTopBtn: 'הזז לחלק העליון',
        P13ColumnsDialogMoveUpBtn: 'הזז למעלה',
        P13ColumnsDialogMoveDownBtn: 'הזז למטה',
        P13ColumnsDialogMoveToBottomBtn: 'הזז לתחתית',
        P13FilterStrategyLabelBetween: 'בין',
        P13FilterStrategyLabelContains: 'מכיל',
        P13FilterStrategyLabelBeginsWith: 'מתחיל ב-',
        P13FilterStrategyLabelEndsWith: 'מסתיים ב-',
        P13FilterStrategyLabelEqualTo: 'שווה ל-',
        P13FilterStrategyLabelGreaterThan: 'גדול מ-',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'גדול מ- או שווה ל-',
        P13FilterStrategyLabelLessThan: 'קטן מ-',
        P13FilterStrategyLabelLessThanOrEqualTo: 'קטן מ- או שווה ל-',
        P13FilterStrategyLabelAfter: 'לאחר',
        P13FilterStrategyLabelOnOrAfter: 'בתאריך או לאחר מכן',
        P13FilterStrategyLabelBefore: 'לפני',
        P13FilterStrategyLabelBeforeOrOn: 'לפני או ב-',
        P13FilterStrategyLabelNotDefined: 'לא הוגדר',
        P13FilterBooleanOptionNotDefined: '',
        P13FilterBooleanOptionTrue: 'כן',
        P13FilterBooleanOptionFalse: 'לא',
        P13FilterDialogHeader: 'סנן לפי',
        P13FilterDialogIncludePanelTitleWithCount: 'כלול ({{count}})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'כלול',
        P13FilterDialogExcludePanelTitleWithCount: 'אל תכלול ({{count}})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'אל תכלול',
        P13FilterDialogRemoveFilterBtnTitle: 'הסר מסנן',
        P13FilterDialoAddFilterBtnTitle: 'Add Filter',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'בטל',
        P13GroupDialogHeader: 'קבוצה',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(אין)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'הצג שדה כעמודה',
        P13GroupDialogRemoveGroupBtnTitle: 'הסר',
        P13GroupDialogAddNewGroupBtnTitle: 'הוסף חדש',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'בטל',
        P13SortDialogHeader: 'מיין',
        P13SortDialogNoneSelectedColumn: '(אין)',
        P13SortDialogNoneSelectedSorting: '(אין)',
        P13SortDialogSortOrderSelectOptionAsc: 'סדר עולה',
        P13SortDialogSortOrderSelectOptionDesc: 'סדר יורד',
        P13SortDialogRemoveSortBtnTitle: 'הסר',
        P13SortDialogAddNewSortBtnTitle: 'הוסף חדש',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'בטל',
        toolbarSearchPlaceholder: 'חפש',
        toolbarActionCreateButtonLabel: 'צור',
        toolbarActionSaveButtonLabel: 'שמור',
        toolbarActionCancelButtonLabel: 'בטל',
        toolbarActionSortButtonTitle: 'מיין',
        toolbarActionFilterButtonTitle: 'מסנן',
        toolbarActionGroupButtonTitle: 'קבוצה',
        toolbarActionColumnsButtonTitle: 'עמודות',
        toolbarActionExpandAllButtonTitle: 'הרחב הכול',
        toolbarActionCollapseAllButtonTitle: 'צמצם הכול',
        filterDialogNotFilteredLabel: '(לא מסונן)',
        filterDialogFilterByLabel: 'סנן לפי: {{filterLabel}}',
        filterDialogFilterTitle: 'מסנן',
        filterDialogFilterBy: 'סנן לפי',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'בטל',
        groupDialogHeader: 'קבוצה',
        groupDialogGroupOrderHeader: 'סדר קיבוץ',
        groupDialogGroupOrderAsc: 'סדר עולה',
        groupDialogGroupOrderDesc: 'סדר יורד',
        groupDialogGroupByHeader: 'קבץ לפי',
        groupDialogNotGroupedLabel: '(לא מקובץ)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'בטל',
        sortDialogHeader: 'מיין',
        sortDialogSortOrderHeader: 'סדר מיון',
        sortDialogSortOrderAsc: 'סדר עולה',
        sortDialogSortOrderDesc: 'סדר יורד',
        sortDialogSortByHeader: 'מיין לפי',
        sortDialogNotSortedLabel: '(לא ממוין)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'בטל',
        selectAllCheckboxLabel: 'בחר הכול',
        deselectAllCheckboxLabel: 'בטל בחירה של הכול',
        deselectSingleRow: 'על מנת לבטל בחירת שורה, הקש על מקש הרווח',
        selectSingleRow: 'על מנת לבחור שורה, הקש על מקש הרווח'
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
    platformWizardGenerator: { summarySectionEditStep: 'ערוך' },
    platformMessagePopover: {
        allErrors: 'הכול',
        defaultErrors: {
            email: 'דוא"ל לא חוקי',
            max: 'השדה חורג מהערך המרבי',
            maxLength: 'השדה חורג מהאורך המרבי',
            min: 'ערך השדה נמוך מהמותר',
            minLength: 'אורך השדה קטן מהמותר',
            pattern: 'ערך השדה אינו חוקי',
            required: 'השדה הוא חובה',
            requiredTrue: 'השדה הוא חובה'
        }
    },
    platformVariantManagement: {
        manage: 'נהל',
        saveAs: 'שמור בשם',
        saveView: 'שמור תצוגה',
        save: 'שמור',
        myViews: 'התצוגות שלי',
        view: 'הצג',
        setAsDefault: 'קבע כברירת מחדל',
        public: 'ציבורי',
        applyAutomatically: 'החל באופן אוטומטי',
        requiredFieldError: 'שדה זה נדרש.',
        nameTakenFieldError: 'משתנה עם שם כזה כבר קיים. בחר שם אחר.',
        cancel: 'בטל',
        manageViews: 'נהל תצוגות',
        markAsFavourite: 'סמן כמועדף',
        sharing: 'שיתוף',
        default: 'ברירת מחדל',
        createdBy: 'נוצר על-ידי',
        removeVariant: 'הסר תצוגה',
        search: 'חפש',
        access: { public: 'ציבורי', private: 'פרטי' }
    },
    platformSelect: { selectOptionLabel: 'בחר אפשרות' },
    fnSlider: {
        minMaxDetails: 'Slider minimum value is {{ min }}, maximum value is {{ max }}',
        valueminDetails: 'Value is {{ value }}',
        valuemaxDetails: 'Value is {{ value }}',
        valueNowDetails: 'Current value is {{ value }}'
    },
    fnSwitch: { semanticAcceptLabel: 'Accept', semanticDeclineLabel: 'Decline' },
    coreTree: { expand: 'הרחב צומת', collapse: 'צמצם צומת', noData: 'אין נתונים' }
};
