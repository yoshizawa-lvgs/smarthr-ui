"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.iconMap = void 0;
var React = __importStar(require("react"));
var fa_1 = require("react-icons/fa");
exports.iconMap = {
    'fa-address-book': fa_1.FaAddressBook,
    'fa-address-card': fa_1.FaAddressCard,
    'fa-angle-double-down': fa_1.FaAngleDoubleDown,
    'fa-angle-double-left': fa_1.FaAngleDoubleLeft,
    'fa-angle-double-right': fa_1.FaAngleDoubleRight,
    'fa-angle-down': fa_1.FaAngleDown,
    'fa-angle-left': fa_1.FaAngleLeft,
    'fa-angle-right': fa_1.FaAngleRight,
    'fa-angle-up': fa_1.FaAngleUp,
    'fa-archive': fa_1.FaArchive,
    'fa-arrow-circle-down': fa_1.FaArrowCircleDown,
    'fa-arrow-alt-circle-down': fa_1.FaArrowAltCircleDown,
    'fa-arrow-alt-circle-left': fa_1.FaArrowAltCircleLeft,
    'fa-arrow-alt-circle-right': fa_1.FaArrowAltCircleRight,
    'fa-arrow-alt-circle-up': fa_1.FaArrowAltCircleUp,
    'fa-arrow-down': fa_1.FaArrowDown,
    'fa-arrow-left': fa_1.FaArrowLeft,
    'fa-arrow-right': fa_1.FaArrowRight,
    'fa-arrow-up': fa_1.FaArrowUp,
    'fa-arrows-alt': fa_1.FaArrowsAlt,
    'fa-arrows-alt-h': fa_1.FaArrowsAltH,
    'fa-arrows-alt-v': fa_1.FaArrowsAltV,
    'fa-asterisk': fa_1.FaAsterisk,
    'fa-ban': fa_1.FaBan,
    'fa-bars': fa_1.FaBars,
    'fa-bell': fa_1.FaBell,
    'fa-bell-slash': fa_1.FaBellSlash,
    'fa-birthday-cake': fa_1.FaBirthdayCake,
    'fa-bolt': fa_1.FaBolt,
    'fa-book': fa_1.FaBook,
    'fa-book-open': fa_1.FaBookOpen,
    'fa-bookmark': fa_1.FaBookmark,
    'fa-box': fa_1.FaBox,
    'fa-box-open': fa_1.FaBoxOpen,
    'fa-boxes': fa_1.FaBoxes,
    'fa-briefcase': fa_1.FaBriefcase,
    'fa-building': fa_1.FaBuilding,
    'fa-bullhorn': fa_1.FaBullhorn,
    'fa-bus': fa_1.FaBus,
    'fa-bus-alt': fa_1.FaBusAlt,
    'fa-business-time': fa_1.FaBusinessTime,
    'fa-calculator': fa_1.FaCalculator,
    'fa-calendar': fa_1.FaCalendar,
    'fa-calendar-alt': fa_1.FaCalendarAlt,
    'fa-calendar-check': fa_1.FaCalendarCheck,
    'fa-calendar-day': fa_1.FaCalendarDay,
    'fa-calendar-minus': fa_1.FaCalendarMinus,
    'fa-calendar-plus': fa_1.FaCalendarPlus,
    'fa-calendar-times': fa_1.FaCalendarTimes,
    'fa-calendar-week': fa_1.FaCalendarWeek,
    'fa-camera': fa_1.FaCamera,
    'fa-car': fa_1.FaCar,
    'fa-car-alt': fa_1.FaCarAlt,
    'fa-car-side': fa_1.FaCarSide,
    'fa-caret-down': fa_1.FaCaretDown,
    'fa-caret-left': fa_1.FaCaretLeft,
    'fa-caret-right': fa_1.FaCaretRight,
    'fa-caret-square-down': fa_1.FaCaretSquareDown,
    'fa-caret-square-left': fa_1.FaCaretSquareLeft,
    'fa-caret-square-right': fa_1.FaCaretSquareRight,
    'fa-caret-square-up': fa_1.FaCaretSquareUp,
    'fa-caret-up': fa_1.FaCaretUp,
    'fa-chart-area': fa_1.FaChartArea,
    'fa-chart-bar': fa_1.FaChartBar,
    'fa-chart-line': fa_1.FaChartLine,
    'fa-chart-pie': fa_1.FaChartPie,
    'fa-check': fa_1.FaCheck,
    'fa-check-circle': fa_1.FaCheckCircle,
    'fa-check-square': fa_1.FaCheckSquare,
    'fa-chevron-circle-down': fa_1.FaChevronCircleDown,
    'fa-chevron-circle-left': fa_1.FaChevronCircleLeft,
    'fa-chevron-circle-right': fa_1.FaChevronCircleRight,
    'fa-chevron-circle-up': fa_1.FaChevronCircleUp,
    'fa-chevron-down': fa_1.FaChevronDown,
    'fa-chevron-left': fa_1.FaChevronLeft,
    'fa-chevron-right': fa_1.FaChevronRight,
    'fa-chevron-up': fa_1.FaChevronUp,
    'fa-circle': fa_1.FaCircle,
    'fa-clipboard': fa_1.FaClipboard,
    'fa-clipboard-check': fa_1.FaClipboardCheck,
    'fa-clipboard-list': fa_1.FaClipboardList,
    'fa-clock': fa_1.FaClock,
    'fa-clone': fa_1.FaClone,
    'fa-cloud': fa_1.FaCloud,
    'fa-cloud-download-alt': fa_1.FaCloudDownloadAlt,
    'fa-cloud-upload-alt': fa_1.FaCloudUploadAlt,
    'fa-code': fa_1.FaCode,
    'fa-cog': fa_1.FaCog,
    'fa-cogs': fa_1.FaCogs,
    'fa-coins': fa_1.FaCoins,
    'fa-columns': fa_1.FaColumns,
    'fa-comment': fa_1.FaComment,
    'fa-comment-alt': fa_1.FaCommentAlt,
    'fa-comment-dots': fa_1.FaCommentDots,
    'fa-comment-slash': fa_1.FaCommentSlash,
    'fa-comments': fa_1.FaComments,
    'fa-compress': fa_1.FaCompress,
    'fa-copy': fa_1.FaCopy,
    'fa-credit-card': fa_1.FaCreditCard,
    'fa-cube': fa_1.FaCube,
    'fa-cubes': fa_1.FaCubes,
    'fa-database': fa_1.FaDatabase,
    'fa-door-closed': fa_1.FaDoorClosed,
    'fa-door-open': fa_1.FaDoorOpen,
    'fa-edit': fa_1.FaEdit,
    'fa-ellipsis-h': fa_1.FaEllipsisH,
    'fa-ellipsis-v': fa_1.FaEllipsisV,
    'fa-envelope': fa_1.FaEnvelope,
    'fa-envelope-open': fa_1.FaEnvelopeOpen,
    'fa-envelope-open-text': fa_1.FaEnvelopeOpenText,
    'fa-exchange-alt': fa_1.FaExchangeAlt,
    'fa-exclamation': fa_1.FaExclamation,
    'fa-exclamation-circle': fa_1.FaExclamationCircle,
    'fa-exclamation-triangle': fa_1.FaExclamationTriangle,
    'fa-expand': fa_1.FaExpand,
    'fa-expand-arrows-alt': fa_1.FaExpandArrowsAlt,
    'fa-external-link-alt': fa_1.FaExternalLinkAlt,
    'fa-eye': fa_1.FaEye,
    'fa-eye-slash': fa_1.FaEyeSlash,
    'fa-file': fa_1.FaFile,
    'fa-file-alt': fa_1.FaFileAlt,
    'fa-file-archive': fa_1.FaFileArchive,
    'fa-file-download': fa_1.FaFileDownload,
    'fa-file-export': fa_1.FaFileExport,
    'fa-file-import': fa_1.FaFileImport,
    'fa-file-upload': fa_1.FaFileUpload,
    'fa-filter': fa_1.FaFilter,
    'fa-flag': fa_1.FaFlag,
    'fa-folder': fa_1.FaFolder,
    'fa-folder-minus': fa_1.FaFolderMinus,
    'fa-folder-open': fa_1.FaFolderOpen,
    'fa-folder-plus': fa_1.FaFolderPlus,
    'fa-font': fa_1.FaFont,
    'fa-forward': fa_1.FaForward,
    'fa-gift': fa_1.FaGift,
    'fa-globe': fa_1.FaGlobe,
    'fa-graduation-cap': fa_1.FaGraduationCap,
    'fa-grip-horizontal': fa_1.FaGripHorizontal,
    'fa-grip-lines': fa_1.FaGripLines,
    'fa-grip-lines-vertical': fa_1.FaGripLinesVertical,
    'fa-grip-vertical': fa_1.FaGripVertical,
    'fa-hand-paper': fa_1.FaHandPaper,
    'fa-hand-point-down': fa_1.FaHandPointDown,
    'fa-hand-point-left': fa_1.FaHandPointLeft,
    'fa-hand-point-right': fa_1.FaHandPointRight,
    'fa-hand-point-up': fa_1.FaHandPointUp,
    'fa-hands': fa_1.FaHands,
    'fa-handshake': fa_1.FaHandshake,
    'fa-heart': fa_1.FaHeart,
    'fa-history': fa_1.FaHistory,
    'fa-home': fa_1.FaHome,
    'fa-hospital': fa_1.FaHospital,
    'fa-hospital-alt': fa_1.FaHospitalAlt,
    'fa-hourglass': fa_1.FaHourglass,
    'fa-hourglass-end': fa_1.FaHourglassEnd,
    'fa-hourglass-half': fa_1.FaHourglassHalf,
    'fa-hourglass-start': fa_1.FaHourglassStart,
    'fa-id-badge': fa_1.FaIdBadge,
    'fa-id-card': fa_1.FaIdCard,
    'fa-id-card-alt': fa_1.FaIdCardAlt,
    'fa-image': fa_1.FaImage,
    'fa-images': fa_1.FaImages,
    'fa-inbox': fa_1.FaInbox,
    'fa-info': fa_1.FaInfo,
    'fa-info-circle': fa_1.FaInfoCircle,
    'fa-key': fa_1.FaKey,
    'fa-keyboard': fa_1.FaKeyboard,
    'fa-lightbulb': fa_1.FaLightbulb,
    'fa-link': fa_1.FaLink,
    'fa-list': fa_1.FaList,
    'fa-list-alt': fa_1.FaListAlt,
    'fa-list-ol': fa_1.FaListOl,
    'fa-list-ul': fa_1.FaListUl,
    'fa-lock': fa_1.FaLock,
    'fa-lock-open': fa_1.FaLockOpen,
    'fa-long-arrow-alt-down': fa_1.FaLongArrowAltDown,
    'fa-long-arrow-alt-left': fa_1.FaLongArrowAltLeft,
    'fa-long-arrow-alt-right': fa_1.FaLongArrowAltRight,
    'fa-long-arrow-alt-up': fa_1.FaLongArrowAltUp,
    'fa-minus': fa_1.FaMinus,
    'fa-minus-circle': fa_1.FaMinusCircle,
    'fa-minus-square': fa_1.FaMinusSquare,
    'fa-mobile': fa_1.FaMobile,
    'fa-mobile-alt': fa_1.FaMobileAlt,
    'fa-money-bill': fa_1.FaMoneyBill,
    'fa-money-bill-alt': fa_1.FaMoneyBillAlt,
    'fa-money-bill-wave': fa_1.FaMoneyBillWave,
    'fa-money-bill-wave-alt': fa_1.FaMoneyBillWaveAlt,
    'fa-money-check': fa_1.FaMoneyCheck,
    'fa-money-check-alt': fa_1.FaMoneyCheckAlt,
    'fa-paper-plane': fa_1.FaPaperPlane,
    'fa-paperclip': fa_1.FaPaperclip,
    'fa-paste': fa_1.FaPaste,
    'fa-pen': fa_1.FaPen,
    'fa-pencil-alt': fa_1.FaPencilAlt,
    'fa-phone': fa_1.FaPhone,
    'fa-phone-slash': fa_1.FaPhoneSlash,
    'fa-piggy-bank': fa_1.FaPiggyBank,
    'fa-plane': fa_1.FaPlane,
    'fa-play': fa_1.FaPlay,
    'fa-play-circle': fa_1.FaPlayCircle,
    'fa-plus': fa_1.FaPlus,
    'fa-plus-circle': fa_1.FaPlusCircle,
    'fa-plus-square': fa_1.FaPlusSquare,
    'fa-poll': fa_1.FaPoll,
    'fa-poll-h': fa_1.FaPollH,
    'fa-portrait': fa_1.FaPortrait,
    'fa-power-off': fa_1.FaPowerOff,
    'fa-print': fa_1.FaPrint,
    'fa-qrcode': fa_1.FaQrcode,
    'fa-question': fa_1.FaQuestion,
    'fa-question-circle': fa_1.FaQuestionCircle,
    'fa-random': fa_1.FaRandom,
    'fa-receipt': fa_1.FaReceipt,
    'fa-redo': fa_1.FaRedo,
    'fa-redo-alt': fa_1.FaRedoAlt,
    'fa-reg-dot-circle': fa_1.FaRegDotCircle,
    'fa-reply': fa_1.FaReply,
    'fa-reply-all': fa_1.FaReplyAll,
    'fa-rocket': fa_1.FaRocket,
    'fa-save': fa_1.FaSave,
    'fa-search': fa_1.FaSearch,
    'fa-search-minus': fa_1.FaSearchMinus,
    'fa-search-plus': fa_1.FaSearchPlus,
    'fa-share': fa_1.FaShare,
    'fa-share-alt': fa_1.FaShareAlt,
    'fa-share-square': fa_1.FaShareSquare,
    'fa-shield-alt': fa_1.FaShieldAlt,
    'fa-shopping-bag': fa_1.FaShoppingBag,
    'fa-shopping-basket': fa_1.FaShoppingBasket,
    'fa-shopping-cart': fa_1.FaShoppingCart,
    'fa-sign-in-alt': fa_1.FaSignInAlt,
    'fa-sign-out-alt': fa_1.FaSignOutAlt,
    'fa-sliders-h': fa_1.FaSlidersH,
    'fa-sort': fa_1.FaSort,
    'fa-sort-alpha-down': fa_1.FaSortAlphaDown,
    'fa-sort-alpha-up': fa_1.FaSortAlphaUp,
    'fa-sort-amount-down': fa_1.FaSortAmountDown,
    'fa-sort-amount-up': fa_1.FaSortAmountUp,
    'fa-sort-down': fa_1.FaSortDown,
    'fa-sort-numeric-down': fa_1.FaSortNumericDown,
    'fa-sort-numeric-up': fa_1.FaSortNumericUp,
    'fa-sort-up': fa_1.FaSortUp,
    'fa-star': fa_1.FaStar,
    'fa-step-backward': fa_1.FaStepBackward,
    'fa-step-forward': fa_1.FaStepForward,
    'fa-sticky-note': fa_1.FaStickyNote,
    'fa-stop': fa_1.FaStop,
    'fa-stop-circle': fa_1.FaStopCircle,
    'fa-stream': fa_1.FaStream,
    'fa-subway': fa_1.FaSubway,
    'fa-sync': fa_1.FaSync,
    'fa-sync-alt': fa_1.FaSyncAlt,
    'fa-table': fa_1.FaTable,
    'fa-tablet': fa_1.FaTablet,
    'fa-tablet-alt': fa_1.FaTabletAlt,
    'fa-tag': fa_1.FaTag,
    'fa-tags': fa_1.FaTags,
    'fa-task': fa_1.FaTasks,
    'fa-taxi': fa_1.FaTaxi,
    'fa-th': fa_1.FaTh,
    'fa-th-large': fa_1.FaThLarge,
    'fa-th-list': fa_1.FaThList,
    'fa-times': fa_1.FaTimes,
    'fa-times-circle': fa_1.FaTimesCircle,
    'fa-toolbox': fa_1.FaToolbox,
    'fa-tools': fa_1.FaTools,
    'fa-trash': fa_1.FaTrash,
    'fa-trash-alt': fa_1.FaTrashAlt,
    'fa-trash-restore': fa_1.FaTrashRestore,
    'fa-trash-restore-alt': fa_1.FaTrashRestoreAlt,
    'fa-undo': fa_1.FaUndo,
    'fa-undo-alt': fa_1.FaUndoAlt,
    'fa-unlink': fa_1.FaUnlink,
    'fa-unlock': fa_1.FaUnlock,
    'fa-unlock-alt': fa_1.FaUnlockAlt,
    'fa-user': fa_1.FaUser,
    'fa-user-alt': fa_1.FaUserAlt,
    'fa-user-alt-slash': fa_1.FaUserAltSlash,
    'fa-user-check': fa_1.FaUserCheck,
    'fa-user-circle': fa_1.FaUserCircle,
    'fa-user-cog': fa_1.FaUserCog,
    'fa-user-edit': fa_1.FaUserEdit,
    'fa-user-minus': fa_1.FaUserMinus,
    'fa-user-plus': fa_1.FaUserPlus,
    'fa-user-slash': fa_1.FaUserSlash,
    'fa-users': fa_1.FaUsers,
    'fa-users-cog': fa_1.FaUsersCog,
    'fa-video': fa_1.FaVideo,
    'fa-video-slash': fa_1.FaVideoSlash,
    'fa-volume-down': fa_1.FaVolumeDown,
    'fa-volume-mute': fa_1.FaVolumeMute,
    'fa-volume-off': fa_1.FaVolumeOff,
    'fa-volume-up': fa_1.FaVolumeUp,
    'fa-wallet': fa_1.FaWallet,
    'fa-window-close': fa_1.FaWindowClose,
    'fa-window-maximize': fa_1.FaWindowMaximize,
    'fa-window-minimize': fa_1.FaWindowMinimize,
    'fa-window-restore': fa_1.FaWindowRestore,
    'fa-wrench': fa_1.FaWrench,
    'fa-yen-sign': fa_1.FaYenSign,
};
exports.Icon = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["name", "className"]);
    var SvgIcon = exports.iconMap[name];
    return React.createElement(SvgIcon, __assign({ className: className }, props));
};
//# sourceMappingURL=Icon.js.map