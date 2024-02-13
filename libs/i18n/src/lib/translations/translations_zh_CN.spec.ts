import { FdLanguage } from '../models';
import { translationTester } from '../utils/translation-tester';
import translations from './translations_zh_CN';

describe('libs/i18n/src/lib/translations/translations_zh_CN.spec.ts', () =>
    translationTester(translations as unknown as FdLanguage));
