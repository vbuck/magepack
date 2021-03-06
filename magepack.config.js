module.exports = [
    {
        name: 'common',
        modules: {
            FormData: 'FormData',
            'MSP_ReCaptcha/js/reCaptcha': 'MSP_ReCaptcha/js/reCaptcha',
            'MSP_ReCaptcha/js/registry': 'MSP_ReCaptcha/js/registry',
            'MSP_ReCaptcha/js/ui-messages-mixin':
                'MSP_ReCaptcha/js/ui-messages-mixin',
            'Magento_Captcha/js/action/refresh':
                'Magento_Captcha/js/action/refresh',
            'Magento_Captcha/js/model/captcha':
                'Magento_Captcha/js/model/captcha',
            'Magento_Captcha/js/model/captchaList':
                'Magento_Captcha/js/model/captchaList',
            'Magento_Captcha/js/view/checkout/defaultCaptcha':
                'Magento_Captcha/js/view/checkout/defaultCaptcha',
            'Magento_Captcha/js/view/checkout/loginCaptcha':
                'Magento_Captcha/js/view/checkout/loginCaptcha',
            'Magento_Catalog/js/price-box': 'Magento_Catalog/js/price-box',
            'Magento_Catalog/js/price-utils': 'Magento_Catalog/js/price-utils',
            'Magento_Catalog/js/product/query-builder':
                'Magento_Catalog/js/product/query-builder',
            'Magento_Catalog/js/product/storage/data-storage':
                'Magento_Catalog/js/product/storage/data-storage',
            'Magento_Catalog/js/product/storage/ids-storage':
                'Magento_Catalog/js/product/storage/ids-storage',
            'Magento_Catalog/js/product/storage/ids-storage-compare':
                'Magento_Catalog/js/product/storage/ids-storage-compare',
            'Magento_Catalog/js/product/storage/storage-service':
                'Magento_Catalog/js/product/storage/storage-service',
            'Magento_Catalog/js/storage-manager':
                'Magento_Catalog/js/storage-manager',
            'Magento_Catalog/js/view/image': 'Magento_Catalog/js/view/image',
            'Magento_Checkout/js/sidebar': 'Magento_Checkout/js/sidebar',
            'Magento_Checkout/js/sidebar-ext':
                'Magento_Checkout/js/sidebar-ext',
            'Magento_Checkout/js/view/minicart':
                'Magento_Checkout/js/view/minicart',
            'Magento_Customer/js/action/login':
                'Magento_Customer/js/action/login',
            'Magento_Customer/js/customer-data':
                'Magento_Customer/js/customer-data',
            'Magento_Customer/js/invalidation-processor':
                'Magento_Customer/js/invalidation-processor',
            'Magento_Customer/js/invalidation-rules/website-rule':
                'Magento_Customer/js/invalidation-rules/website-rule',
            'Magento_Customer/js/model/authentication-popup':
                'Magento_Customer/js/model/authentication-popup',
            'Magento_Customer/js/section-config':
                'Magento_Customer/js/section-config',
            'Magento_Customer/js/view/authentication-popup':
                'Magento_Customer/js/view/authentication-popup',
            'Magento_Msrp/js/view/checkout/minicart/subtotal/totals':
                'Magento_Msrp/js/view/checkout/minicart/subtotal/totals',
            'Magento_PageCache/js/page-cache':
                'Magento_PageCache/js/page-cache',
            'Magento_PageCache/js/submit-button-enabler':
                'Magento_PageCache/js/submit-button-enabler',
            'Magento_Persistent/js/view/customer-data-mixin':
                'Magento_Persistent/js/view/customer-data-mixin',
            'Magento_Search/js/form-mini': 'Magento_Search/js/form-mini',
            'Magento_Swatches/js/swatch-renderer':
                'Magento_Swatches/js/swatch-renderer',
            'Magento_Swatches/js/swatch-renderer-ext':
                'Magento_Swatches/js/swatch-renderer-ext',
            'Magento_Tax/js/view/checkout/minicart/subtotal/totals':
                'Magento_Tax/js/view/checkout/minicart/subtotal/totals',
            'Magento_Theme/js/responsive': 'Magento_Theme/js/responsive',
            'Magento_Theme/js/theme': 'Magento_Theme/js/theme',
            'Magento_Theme/js/view/messages': 'Magento_Theme/js/view/messages',
            'Magento_Translation/js/mage-translation-dictionary':
                'Magento_Translation/js/mage-translation-dictionary',
            'Magento_Ui/js/block-loader': 'Magento_Ui/js/block-loader',
            'Magento_Ui/js/core/app': 'Magento_Ui/js/core/app',
            'Magento_Ui/js/core/renderer/layout':
                'Magento_Ui/js/core/renderer/layout',
            'Magento_Ui/js/core/renderer/types':
                'Magento_Ui/js/core/renderer/types',
            'Magento_Ui/js/form/adapter': 'Magento_Ui/js/form/adapter',
            'Magento_Ui/js/form/adapter/buttons':
                'Magento_Ui/js/form/adapter/buttons',
            'Magento_Ui/js/form/form': 'Magento_Ui/js/form/form',
            'Magento_Ui/js/lib/core/class': 'Magento_Ui/js/lib/core/class',
            'Magento_Ui/js/lib/core/collection':
                'Magento_Ui/js/lib/core/collection',
            'Magento_Ui/js/lib/core/element/element':
                'Magento_Ui/js/lib/core/element/element',
            'Magento_Ui/js/lib/core/element/links':
                'Magento_Ui/js/lib/core/element/links',
            'Magento_Ui/js/lib/core/events': 'Magento_Ui/js/lib/core/events',
            'Magento_Ui/js/lib/core/storage/local':
                'Magento_Ui/js/lib/core/storage/local',
            'Magento_Ui/js/lib/key-codes': 'Magento_Ui/js/lib/key-codes',
            'Magento_Ui/js/lib/knockout/bindings/after-render':
                'Magento_Ui/js/lib/knockout/bindings/after-render',
            'Magento_Ui/js/lib/knockout/bindings/autoselect':
                'Magento_Ui/js/lib/knockout/bindings/autoselect',
            'Magento_Ui/js/lib/knockout/bindings/bind-html':
                'Magento_Ui/js/lib/knockout/bindings/bind-html',
            'Magento_Ui/js/lib/knockout/bindings/bootstrap':
                'Magento_Ui/js/lib/knockout/bindings/bootstrap',
            'Magento_Ui/js/lib/knockout/bindings/collapsible':
                'Magento_Ui/js/lib/knockout/bindings/collapsible',
            'Magento_Ui/js/lib/knockout/bindings/color-picker':
                'Magento_Ui/js/lib/knockout/bindings/color-picker',
            'Magento_Ui/js/lib/knockout/bindings/datepicker':
                'Magento_Ui/js/lib/knockout/bindings/datepicker',
            'Magento_Ui/js/lib/knockout/bindings/fadeVisible':
                'Magento_Ui/js/lib/knockout/bindings/fadeVisible',
            'Magento_Ui/js/lib/knockout/bindings/i18n':
                'Magento_Ui/js/lib/knockout/bindings/i18n',
            'Magento_Ui/js/lib/knockout/bindings/keyboard':
                'Magento_Ui/js/lib/knockout/bindings/keyboard',
            'Magento_Ui/js/lib/knockout/bindings/mage-init':
                'Magento_Ui/js/lib/knockout/bindings/mage-init',
            'Magento_Ui/js/lib/knockout/bindings/optgroup':
                'Magento_Ui/js/lib/knockout/bindings/optgroup',
            'Magento_Ui/js/lib/knockout/bindings/outer_click':
                'Magento_Ui/js/lib/knockout/bindings/outer_click',
            'Magento_Ui/js/lib/knockout/bindings/range':
                'Magento_Ui/js/lib/knockout/bindings/range',
            'Magento_Ui/js/lib/knockout/bindings/resizable':
                'Magento_Ui/js/lib/knockout/bindings/resizable',
            'Magento_Ui/js/lib/knockout/bindings/scope':
                'Magento_Ui/js/lib/knockout/bindings/scope',
            'Magento_Ui/js/lib/knockout/bindings/simple-checked':
                'Magento_Ui/js/lib/knockout/bindings/simple-checked',
            'Magento_Ui/js/lib/knockout/bindings/staticChecked':
                'Magento_Ui/js/lib/knockout/bindings/staticChecked',
            'Magento_Ui/js/lib/knockout/bindings/tooltip':
                'Magento_Ui/js/lib/knockout/bindings/tooltip',
            'Magento_Ui/js/lib/knockout/bootstrap':
                'Magento_Ui/js/lib/knockout/bootstrap',
            'Magento_Ui/js/lib/knockout/extender/bound-nodes':
                'Magento_Ui/js/lib/knockout/extender/bound-nodes',
            'Magento_Ui/js/lib/knockout/extender/observable_array':
                'Magento_Ui/js/lib/knockout/extender/observable_array',
            'Magento_Ui/js/lib/knockout/template/engine':
                'Magento_Ui/js/lib/knockout/template/engine',
            'Magento_Ui/js/lib/knockout/template/loader':
                'Magento_Ui/js/lib/knockout/template/loader',
            'Magento_Ui/js/lib/knockout/template/observable_source':
                'Magento_Ui/js/lib/knockout/template/observable_source',
            'Magento_Ui/js/lib/knockout/template/renderer':
                'Magento_Ui/js/lib/knockout/template/renderer',
            'Magento_Ui/js/lib/logger/console-logger':
                'Magento_Ui/js/lib/logger/console-logger',
            'Magento_Ui/js/lib/logger/console-output-handler':
                'Magento_Ui/js/lib/logger/console-output-handler',
            'Magento_Ui/js/lib/logger/entry': 'Magento_Ui/js/lib/logger/entry',
            'Magento_Ui/js/lib/logger/entry-factory':
                'Magento_Ui/js/lib/logger/entry-factory',
            'Magento_Ui/js/lib/logger/formatter':
                'Magento_Ui/js/lib/logger/formatter',
            'Magento_Ui/js/lib/logger/levels-pool':
                'Magento_Ui/js/lib/logger/levels-pool',
            'Magento_Ui/js/lib/logger/logger':
                'Magento_Ui/js/lib/logger/logger',
            'Magento_Ui/js/lib/logger/logger-utils':
                'Magento_Ui/js/lib/logger/logger-utils',
            'Magento_Ui/js/lib/logger/message-pool':
                'Magento_Ui/js/lib/logger/message-pool',
            'Magento_Ui/js/lib/registry/registry':
                'Magento_Ui/js/lib/registry/registry',
            'Magento_Ui/js/lib/spinner': 'Magento_Ui/js/lib/spinner',
            'Magento_Ui/js/lib/view/utils/async':
                'Magento_Ui/js/lib/view/utils/async',
            'Magento_Ui/js/lib/view/utils/bindings':
                'Magento_Ui/js/lib/view/utils/bindings',
            'Magento_Ui/js/lib/view/utils/dom-observer':
                'Magento_Ui/js/lib/view/utils/dom-observer',
            'Magento_Ui/js/modal/alert': 'Magento_Ui/js/modal/alert',
            'Magento_Ui/js/modal/confirm': 'Magento_Ui/js/modal/confirm',
            'Magento_Ui/js/modal/modal': 'Magento_Ui/js/modal/modal',
            'Magento_Ui/js/model/messageList':
                'Magento_Ui/js/model/messageList',
            'Magento_Ui/js/model/messages': 'Magento_Ui/js/model/messages',
            'Magento_Ui/js/view/messages': 'Magento_Ui/js/view/messages',
            'Magento_Ui/js/view/messages-ext':
                'Magento_Ui/js/view/messages-ext',
            'Magento_Wishlist/js/view/wishlist':
                'Magento_Wishlist/js/view/wishlist',
            MutationObserver: 'MutationObserver',
            'Smile_ElasticsuiteCatalog/js/autocomplete/product-attribute':
                'Smile_ElasticsuiteCatalog/js/autocomplete/product-attribute',
            'Smile_ElasticsuiteCore/js/form-mini':
                'Smile_ElasticsuiteCore/js/form-mini',
            'Smile_ElasticsuiteCore/js/form-mini-ext':
                'Smile_ElasticsuiteCore/js/form-mini-ext',
            Swiper: 'js/vendor/swiper',
            domReady: 'requirejs/domReady',
            'es6-collections': 'es6-collections',
            isMobile: 'js/vendor/ismobile',
            jquery: 'jquery',
            'jquery-ui-modules/button': 'jquery/ui-modules/button',
            'jquery-ui-modules/core': 'jquery/ui-modules/core',
            'jquery-ui-modules/datepicker': 'jquery/ui-modules/datepicker',
            'jquery-ui-modules/dialog': 'jquery/ui-modules/dialog',
            'jquery-ui-modules/draggable': 'jquery/ui-modules/draggable',
            'jquery-ui-modules/effect': 'jquery/ui-modules/effect',
            'jquery-ui-modules/effect-blind': 'jquery/ui-modules/effect-blind',
            'jquery-ui-modules/effect-fade': 'jquery/ui-modules/effect-fade',
            'jquery-ui-modules/mouse': 'jquery/ui-modules/mouse',
            'jquery-ui-modules/position': 'jquery/ui-modules/position',
            'jquery-ui-modules/resizable': 'jquery/ui-modules/resizable',
            'jquery-ui-modules/slider': 'jquery/ui-modules/slider',
            'jquery-ui-modules/timepicker': 'jquery/ui-modules/timepicker',
            'jquery-ui-modules/widget': 'jquery/ui-modules/widget',
            'jquery/jquery-migrate': 'jquery/jquery-migrate',
            'jquery/jquery-storageapi':
                'Magento_Cookie/js/jquery.storageapi.extended',
            'jquery/jquery.cookie': 'jquery/jquery.cookie',
            'jquery/jquery.metadata': 'jquery/jquery.metadata',
            'jquery/jquery.mobile.custom': 'jquery/jquery.mobile.custom',
            'jquery/jquery.parsequery': 'jquery/jquery.parsequery',
            'jquery/patches/jquery': 'jquery/patches/jquery',
            'jquery/patches/jquery-ui': 'jquery/patches/jquery-ui',
            'jquery/validate': 'jquery/jquery.validate',
            'js/collapsible-ext': 'js/collapsible-ext',
            'js/uenc-updater': 'js/uenc-updater',
            'js/validation-ext': 'js/validation-ext',
            'knockoutjs/knockout': 'knockoutjs/knockout',
            'knockoutjs/knockout-es5': 'knockoutjs/knockout-es5',
            'knockoutjs/knockout-fast-foreach':
                'knockoutjs/knockout-fast-foreach',
            'knockoutjs/knockout-repeat': 'knockoutjs/knockout-repeat',
            'mage/apply/main': 'mage/apply/main',
            'mage/apply/scripts': 'mage/apply/scripts',
            'mage/bootstrap': 'mage/bootstrap',
            'mage/calendar': 'mage/calendar',
            'mage/collapsible': 'mage/collapsible',
            'mage/common': 'mage/common',
            'mage/cookies': 'mage/cookies',
            'mage/dataPost': 'mage/dataPost',
            'mage/decorate': 'mage/decorate',
            'mage/dropdown': 'mage/dropdown',
            'mage/ie-class-fixer': 'mage/ie-class-fixer',
            'mage/loader': 'mage/loader',
            'mage/mage': 'mage/mage',
            'mage/requirejs/resolver': 'mage/requirejs/resolver',
            'mage/smart-keyboard-handler': 'mage/smart-keyboard-handler',
            'mage/storage': 'mage/storage',
            'mage/tabs': 'mage/tabs',
            'mage/template': 'mage/template',
            'mage/translate': 'mage/translate',
            'mage/translate-inline': 'mage/translate-inline',
            'mage/url': 'mage/url',
            'mage/utils/arrays': 'mage/utils/arrays',
            'mage/utils/compare': 'mage/utils/compare',
            'mage/utils/main': 'mage/utils/main',
            'mage/utils/misc': 'mage/utils/misc',
            'mage/utils/objects': 'mage/utils/objects',
            'mage/utils/strings': 'mage/utils/strings',
            'mage/utils/template': 'mage/utils/template',
            'mage/utils/wrapper': 'mage/utils/wrapper',
            'mage/validation': 'mage/validation',
            'mage/validation/validation': 'mage/validation/validation',
            matchMedia: 'matchMedia',
            moment: 'moment',
            spectrum: 'jquery/spectrum/spectrum',
            text: 'mage/requirejs/text',
            'text!MSP_ReCaptcha/template/reCaptcha.html':
                'MSP_ReCaptcha/template/reCaptcha.html',
            'text!Magento_Captcha/template/checkout/captcha.html':
                'Magento_Captcha/template/checkout/captcha.html',
            'text!Magento_Checkout/template/minicart/content.html':
                'Magento_Checkout/template/minicart/content.html',
            'text!Magento_Customer/template/authentication-popup.html':
                'Magento_Customer/template/authentication-popup.html',
            'text!Magento_Ui/template/messages.html':
                'Magento_Ui/template/messages.html',
            'text!Smile_ElasticsuiteCatalog/template/autocomplete/category.html':
                'Smile_ElasticsuiteCatalog/template/autocomplete/category.html',
            'text!Smile_ElasticsuiteCatalog/template/autocomplete/product-attribute.html':
                'Smile_ElasticsuiteCatalog/template/autocomplete/product-attribute.html',
            'text!Smile_ElasticsuiteCatalog/template/autocomplete/product.html':
                'Smile_ElasticsuiteCatalog/template/autocomplete/product.html',
            'text!Smile_ElasticsuiteCms/template/autocomplete/cms.html':
                'Smile_ElasticsuiteCms/template/autocomplete/cms.html',
            'text!Smile_ElasticsuiteCore/template/autocomplete/term.html':
                'Smile_ElasticsuiteCore/template/autocomplete/term.html',
            'text!js-translation.json': 'js-translation.json',
            'text!ui/template/block-loader.html':
                'Magento_Ui/templates/block-loader.html',
            'text!ui/template/collection.html':
                'Magento_Ui/templates/collection.html',
            'text!ui/template/modal/modal-custom.html':
                'Magento_Ui/templates/modal/modal-custom.html',
            'text!ui/template/modal/modal-popup.html':
                'Magento_Ui/templates/modal/modal-popup.html',
            'text!ui/template/modal/modal-slide.html':
                'Magento_Ui/templates/modal/modal-slide.html',
            'text!ui/template/tooltip/tooltip.html':
                'Magento_Ui/templates/tooltip/tooltip.html',
            tinycolor: 'jquery/spectrum/tinycolor',
            underscore: 'underscore',
        },
    },
    {
        url: '',
        name: 'category',
        modules: {
            'MageSuite_ProductNavigation/js/links-collector':
                'MageSuite_ProductNavigation/js/links-collector',
            'MageSuite_SeoLinkMasking/js/attribute-filter-ext':
                'MageSuite_SeoLinkMasking/js/attribute-filter-ext',
            'MageSuite_Sorting/js/product/list/toolbar':
                'MageSuite_Sorting/js/product/list/toolbar',
            'Magento_Catalog/js/product/list/toolbar':
                'Magento_Catalog/js/product/list/toolbar',
            'Magento_Cookie/js/notices': 'Magento_Cookie/js/notices',
            'Magento_Cookie/js/require-cookie':
                'Magento_Cookie/js/require-cookie',
            'Magento_Wishlist/js/add-to-wishlist':
                'Magento_Wishlist/js/add-to-wishlist',
            'Smile_ElasticsuiteCatalog/js/attribute-filter':
                'Smile_ElasticsuiteCatalog/js/attribute-filter',
            'Smile_ElasticsuiteCatalog/js/range-slider-widget':
                'Smile_ElasticsuiteCatalog/js/range-slider-widget',
            'Smile_ElasticsuiteCatalog/js/range-slider-widget-ext':
                'Smile_ElasticsuiteCatalog/js/range-slider-widget-ext',
            bootstrapSelect: 'js/vendor/bootstrap-select',
            'js/category': 'js/category',
            'mage/accordion': 'mage/accordion',
            'text!MageSuite_SeoLinkMasking/template/attribute-filter.html':
                'MageSuite_SeoLinkMasking/template/attribute-filter.html',
        },
    },
    {
        url: '',
        name: 'cms',
        modules: {
            'Magento_Catalog/js/catalog-add-to-cart':
                'Magento_Catalog/js/catalog-add-to-cart',
            'Magento_Catalog/js/catalog-add-to-cart-ext':
                'Magento_Catalog/js/catalog-add-to-cart-ext',
            'Magento_Catalog/js/product/view/product-ids':
                'Magento_Catalog/js/product/view/product-ids',
            'Magento_Catalog/js/product/view/product-ids-resolver':
                'Magento_Catalog/js/product/view/product-ids-resolver',
            'js/cms': 'js/cms',
        },
    },
    {
        url: [],
        name: 'product',
        modules: {
            'Aheadworks_Pquestion/js/aw_pquestion':
                'Aheadworks_Pquestion/js/aw_pquestion',
            'Aheadworks_Pquestion/js/aw_pquestion_sorter':
                'Aheadworks_Pquestion/js/aw_pquestion_sorter',
            'Aheadworks_Pquestion/js/aw_pquestion_voter':
                'Aheadworks_Pquestion/js/aw_pquestion_voter',
            'MageSuite_ProductNavigation/js/product-navigation':
                'MageSuite_ProductNavigation/js/product-navigation',
            'Magento_Catalog/js/catalog-add-to-cart':
                'Magento_Catalog/js/catalog-add-to-cart',
            'Magento_Catalog/js/catalog-add-to-cart-ext':
                'Magento_Catalog/js/catalog-add-to-cart-ext',
            'Magento_Catalog/js/gallery': 'Magento_Catalog/js/gallery',
            'Magento_Catalog/js/product/view/product-ids':
                'Magento_Catalog/js/product/view/product-ids',
            'Magento_Catalog/js/product/view/product-ids-resolver':
                'Magento_Catalog/js/product/view/product-ids-resolver',
            'Magento_Catalog/js/validate-product':
                'Magento_Catalog/js/validate-product',
            'Magento_Catalog/product/view/validation':
                'Magento_Catalog/product/view/validation',
            'Magento_Cookie/js/notices': 'Magento_Cookie/js/notices',
            'Magento_Cookie/js/require-cookie':
                'Magento_Cookie/js/require-cookie',
            'Magento_Customer/js/view/customer':
                'Magento_Customer/js/view/customer',
            'Magento_InstantPurchase/js/view/instant-purchase':
                'Magento_InstantPurchase/js/view/instant-purchase',
            'Magento_ProductVideo/js/fotorama-add-video-events':
                'Magento_ProductVideo/js/fotorama-add-video-events',
            'Magento_ProductVideo/js/load-player':
                'Magento_ProductVideo/js/load-player',
            'Magento_Review/js/error-placement':
                'Magento_Review/js/error-placement',
            'Magento_Review/js/process-reviews':
                'Magento_Review/js/process-reviews',
            'Magento_Review/js/view/review': 'Magento_Review/js/view/review',
            'Magento_Swatches/js/catalog-add-to-cart':
                'Magento_Swatches/js/catalog-add-to-cart',
            'Magento_Wishlist/js/add-to-wishlist':
                'Magento_Wishlist/js/add-to-wishlist',
            'fotorama/fotorama': 'fotorama/fotorama',
            'js/pdp': 'js/pdp',
            'mage/gallery/gallery': 'mage/gallery/gallery',
            'magnifier/magnifier': 'magnifier/magnifier',
            'magnifier/magnify': 'magnifier/magnify',
            'text!Magento_InstantPurchase/template/confirmation.html':
                'Magento_InstantPurchase/template/confirmation.html',
            'text!Magento_InstantPurchase/template/instant-purchase.html':
                'Magento_InstantPurchase/template/instant-purchase.html',
            'text!mage/gallery/gallery.html': 'mage/gallery/gallery.html',
        },
    },
    {
        url: {},
        name: 'checkout',
        modules: {
            'Aheadworks_Giftcard/js/action/get-customer-giftcards':
                'Aheadworks_Giftcard/js/action/get-customer-giftcards',
            'Aheadworks_Giftcard/js/action/remove-giftcard-code':
                'Aheadworks_Giftcard/js/action/remove-giftcard-code',
            'Aheadworks_Giftcard/js/model/customer/giftcard':
                'Aheadworks_Giftcard/js/model/customer/giftcard',
            'Aheadworks_Giftcard/js/model/payment/giftcard-messages':
                'Aheadworks_Giftcard/js/model/payment/giftcard-messages',
            'Aheadworks_Giftcard/js/model/resource-url-manager':
                'Aheadworks_Giftcard/js/model/resource-url-manager',
            'Aheadworks_Giftcard/js/view/checkout/summary/giftcard':
                'Aheadworks_Giftcard/js/view/checkout/summary/giftcard',
            'Aheadworks_Giftcard/js/widget/giftcardManagement':
                'Aheadworks_Giftcard/js/widget/giftcardManagement',
            'Klarna_Kp/js/action/override': 'Klarna_Kp/js/action/override',
            'Klarna_Kp/js/model/config': 'Klarna_Kp/js/model/config',
            'MageSuite_BulkGoods/js/view/checkout/cart/totals/bulk_goods_fee':
                'MageSuite_BulkGoods/js/view/checkout/cart/totals/bulk_goods_fee',
            'MageSuite_BulkGoods/js/view/checkout/summary/bulk_goods_fee':
                'MageSuite_BulkGoods/js/view/checkout/summary/bulk_goods_fee',
            'MageSuite_LoginOrGuestCheckoutStep/js/view/step-navigator-mixin':
                'MageSuite_LoginOrGuestCheckoutStep/js/view/step-navigator-mixin',
            'Magento_Checkout/js/action/create-billing-address':
                'Magento_Checkout/js/action/create-billing-address',
            'Magento_Checkout/js/action/create-shipping-address':
                'Magento_Checkout/js/action/create-shipping-address',
            'Magento_Checkout/js/action/get-payment-information':
                'Magento_Checkout/js/action/get-payment-information',
            'Magento_Checkout/js/action/select-billing-address':
                'Magento_Checkout/js/action/select-billing-address',
            'Magento_Checkout/js/action/select-payment-method':
                'Magento_Checkout/js/action/select-payment-method',
            'Magento_Checkout/js/action/select-shipping-address':
                'Magento_Checkout/js/action/select-shipping-address',
            'Magento_Checkout/js/action/select-shipping-method':
                'Magento_Checkout/js/action/select-shipping-method',
            'Magento_Checkout/js/checkout-data':
                'Magento_Checkout/js/checkout-data',
            'Magento_Checkout/js/discount-codes':
                'Magento_Checkout/js/discount-codes',
            'Magento_Checkout/js/model/address-converter':
                'Magento_Checkout/js/model/address-converter',
            'Magento_Checkout/js/model/cart/cache':
                'Magento_Checkout/js/model/cart/cache',
            'Magento_Checkout/js/model/cart/estimate-service':
                'Magento_Checkout/js/model/cart/estimate-service',
            'Magento_Checkout/js/model/cart/totals-processor/default':
                'Magento_Checkout/js/model/cart/totals-processor/default',
            'Magento_Checkout/js/model/checkout-data-resolver':
                'Magento_Checkout/js/model/checkout-data-resolver',
            'Magento_Checkout/js/model/checkout-data-resolver-ext':
                'Magento_Checkout/js/model/checkout-data-resolver-ext',
            'Magento_Checkout/js/model/default-post-code-resolver':
                'Magento_Checkout/js/model/default-post-code-resolver',
            'Magento_Checkout/js/model/default-validation-rules':
                'Magento_Checkout/js/model/default-validation-rules',
            'Magento_Checkout/js/model/default-validator':
                'Magento_Checkout/js/model/default-validator',
            'Magento_Checkout/js/model/error-processor':
                'Magento_Checkout/js/model/error-processor',
            'Magento_Checkout/js/model/full-screen-loader':
                'Magento_Checkout/js/model/full-screen-loader',
            'Magento_Checkout/js/model/new-customer-address':
                'Magento_Checkout/js/model/new-customer-address',
            'Magento_Checkout/js/model/payment-service':
                'Magento_Checkout/js/model/payment-service',
            'Magento_Checkout/js/model/payment/method-converter':
                'Magento_Checkout/js/model/payment/method-converter',
            'Magento_Checkout/js/model/payment/method-list':
                'Magento_Checkout/js/model/payment/method-list',
            'Magento_Checkout/js/model/postcode-validator':
                'Magento_Checkout/js/model/postcode-validator',
            'Magento_Checkout/js/model/quote':
                'Magento_Checkout/js/model/quote',
            'Magento_Checkout/js/model/resource-url-manager':
                'Magento_Checkout/js/model/resource-url-manager',
            'Magento_Checkout/js/model/shipping-address/form-popup-state':
                'Magento_Checkout/js/model/shipping-address/form-popup-state',
            'Magento_Checkout/js/model/shipping-rate-processor/new-address':
                'Magento_Checkout/js/model/shipping-rate-processor/new-address',
            'Magento_Checkout/js/model/shipping-rate-registry':
                'Magento_Checkout/js/model/shipping-rate-registry',
            'Magento_Checkout/js/model/shipping-rates-validation-rules':
                'Magento_Checkout/js/model/shipping-rates-validation-rules',
            'Magento_Checkout/js/model/shipping-rates-validator':
                'Magento_Checkout/js/model/shipping-rates-validator',
            'Magento_Checkout/js/model/shipping-service':
                'Magento_Checkout/js/model/shipping-service',
            'Magento_Checkout/js/model/step-navigator':
                'Magento_Checkout/js/model/step-navigator',
            'Magento_Checkout/js/model/step-navigator-ext':
                'Magento_Checkout/js/model/step-navigator-ext',
            'Magento_Checkout/js/model/totals':
                'Magento_Checkout/js/model/totals',
            'Magento_Checkout/js/model/url-builder':
                'Magento_Checkout/js/model/url-builder',
            'Magento_Checkout/js/proceed-to-checkout':
                'Magento_Checkout/js/proceed-to-checkout',
            'Magento_Checkout/js/shopping-cart':
                'Magento_Checkout/js/shopping-cart',
            'Magento_Checkout/js/view/cart/shipping-estimation':
                'Magento_Checkout/js/view/cart/shipping-estimation',
            'Magento_Checkout/js/view/cart/shipping-rates':
                'Magento_Checkout/js/view/cart/shipping-rates',
            'Magento_Checkout/js/view/cart/totals':
                'Magento_Checkout/js/view/cart/totals',
            'Magento_Checkout/js/view/summary/abstract-total':
                'Magento_Checkout/js/view/summary/abstract-total',
            'Magento_Checkout/js/view/summary/shipping':
                'Magento_Checkout/js/view/summary/shipping',
            'Magento_Cookie/js/notices': 'Magento_Cookie/js/notices',
            'Magento_Customer/js/model/address-list':
                'Magento_Customer/js/model/address-list',
            'Magento_Customer/js/model/customer':
                'Magento_Customer/js/model/customer',
            'Magento_Customer/js/model/customer-addresses':
                'Magento_Customer/js/model/customer-addresses',
            'Magento_Customer/js/model/customer/address':
                'Magento_Customer/js/model/customer/address',
            'Magento_Dhl/js/model/shipping-rates-validation-rules':
                'Magento_Dhl/js/model/shipping-rates-validation-rules',
            'Magento_Dhl/js/model/shipping-rates-validator':
                'Magento_Dhl/js/model/shipping-rates-validator',
            'Magento_Dhl/js/view/shipping-rates-validation':
                'Magento_Dhl/js/view/shipping-rates-validation',
            'Magento_Fedex/js/model/shipping-rates-validation-rules':
                'Magento_Fedex/js/model/shipping-rates-validation-rules',
            'Magento_Fedex/js/model/shipping-rates-validator':
                'Magento_Fedex/js/model/shipping-rates-validator',
            'Magento_Fedex/js/view/shipping-rates-validation':
                'Magento_Fedex/js/view/shipping-rates-validation',
            'Magento_GiftMessage/js/action/gift-options':
                'Magento_GiftMessage/js/action/gift-options',
            'Magento_GiftMessage/js/model/gift-message':
                'Magento_GiftMessage/js/model/gift-message',
            'Magento_GiftMessage/js/model/gift-options':
                'Magento_GiftMessage/js/model/gift-options',
            'Magento_GiftMessage/js/model/url-builder':
                'Magento_GiftMessage/js/model/url-builder',
            'Magento_GiftMessage/js/view/gift-message':
                'Magento_GiftMessage/js/view/gift-message',
            'Magento_InventoryInStorePickupFrontend/js/model/pickup-address-converter':
                'Magento_InventoryInStorePickupFrontend/js/model/pickup-address-converter',
            'Magento_InventoryInStorePickupFrontend/js/model/quote-ext':
                'Magento_InventoryInStorePickupFrontend/js/model/quote-ext',
            'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/flatrate':
                'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/flatrate',
            'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/freeshipping':
                'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/freeshipping',
            'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/tablerate':
                'Magento_OfflineShipping/js/model/shipping-rates-validation-rules/tablerate',
            'Magento_OfflineShipping/js/model/shipping-rates-validator/flatrate':
                'Magento_OfflineShipping/js/model/shipping-rates-validator/flatrate',
            'Magento_OfflineShipping/js/model/shipping-rates-validator/freeshipping':
                'Magento_OfflineShipping/js/model/shipping-rates-validator/freeshipping',
            'Magento_OfflineShipping/js/model/shipping-rates-validator/tablerate':
                'Magento_OfflineShipping/js/model/shipping-rates-validator/tablerate',
            'Magento_OfflineShipping/js/view/shipping-rates-validation/flatrate':
                'Magento_OfflineShipping/js/view/shipping-rates-validation/flatrate',
            'Magento_OfflineShipping/js/view/shipping-rates-validation/freeshipping':
                'Magento_OfflineShipping/js/view/shipping-rates-validation/freeshipping',
            'Magento_OfflineShipping/js/view/shipping-rates-validation/tablerate':
                'Magento_OfflineShipping/js/view/shipping-rates-validation/tablerate',
            'Magento_SalesRule/js/view/cart/totals/discount':
                'Magento_SalesRule/js/view/cart/totals/discount',
            'Magento_SalesRule/js/view/summary/discount':
                'Magento_SalesRule/js/view/summary/discount',
            'Magento_Tax/js/view/checkout/cart/totals/grand-total':
                'Magento_Tax/js/view/checkout/cart/totals/grand-total',
            'Magento_Tax/js/view/checkout/cart/totals/shipping':
                'Magento_Tax/js/view/checkout/cart/totals/shipping',
            'Magento_Tax/js/view/checkout/cart/totals/tax':
                'Magento_Tax/js/view/checkout/cart/totals/tax',
            'Magento_Tax/js/view/checkout/shipping_method/price':
                'Magento_Tax/js/view/checkout/shipping_method/price',
            'Magento_Tax/js/view/checkout/summary/grand-total':
                'Magento_Tax/js/view/checkout/summary/grand-total',
            'Magento_Tax/js/view/checkout/summary/shipping':
                'Magento_Tax/js/view/checkout/summary/shipping',
            'Magento_Tax/js/view/checkout/summary/subtotal':
                'Magento_Tax/js/view/checkout/summary/subtotal',
            'Magento_Tax/js/view/checkout/summary/tax':
                'Magento_Tax/js/view/checkout/summary/tax',
            'Magento_Ui/js/form/element/abstract':
                'Magento_Ui/js/form/element/abstract',
            'Magento_Ui/js/form/element/abstract-ext':
                'Magento_Ui/js/form/element/abstract-ext',
            'Magento_Ui/js/form/element/region':
                'Magento_Ui/js/form/element/region',
            'Magento_Ui/js/form/element/select':
                'Magento_Ui/js/form/element/select',
            'Magento_Ui/js/lib/validation/rules':
                'Magento_Ui/js/lib/validation/rules',
            'Magento_Ui/js/lib/validation/utils':
                'Magento_Ui/js/lib/validation/utils',
            'Magento_Ui/js/lib/validation/validator':
                'Magento_Ui/js/lib/validation/validator',
            'Magento_Ups/js/model/shipping-rates-validation-rules':
                'Magento_Ups/js/model/shipping-rates-validation-rules',
            'Magento_Ups/js/model/shipping-rates-validator':
                'Magento_Ups/js/model/shipping-rates-validator',
            'Magento_Ups/js/view/shipping-rates-validation':
                'Magento_Ups/js/view/shipping-rates-validation',
            'Magento_Usps/js/model/shipping-rates-validation-rules':
                'Magento_Usps/js/model/shipping-rates-validation-rules',
            'Magento_Usps/js/model/shipping-rates-validator':
                'Magento_Usps/js/model/shipping-rates-validator',
            'Magento_Usps/js/view/shipping-rates-validation':
                'Magento_Usps/js/view/shipping-rates-validation',
            'Magento_Weee/js/view/cart/totals/weee':
                'Magento_Weee/js/view/cart/totals/weee',
            'Magento_Weee/js/view/checkout/summary/weee':
                'Magento_Weee/js/view/checkout/summary/weee',
            'Payone_Core/js/model/error-processor-mixin':
                'Payone_Core/js/model/error-processor-mixin',
            'Vertex_Tax/js/view/checkout/summary/tax-messages':
                'Vertex_Tax/js/view/checkout/summary/tax-messages',
            'js/checkout': 'js/checkout',
            'mage/toggle': 'mage/toggle',
            'mage/trim-input': 'mage/trim-input',
            'text!Aheadworks_Giftcard/template/checkout/summary/giftcard.html':
                'Aheadworks_Giftcard/template/checkout/summary/giftcard.html',
            'text!MageSuite_BulkGoods/template/checkout/cart/totals/bulk_goods_fee.html':
                'MageSuite_BulkGoods/template/checkout/cart/totals/bulk_goods_fee.html',
            'text!Magento_Catalog/template/product/image_with_borders.html':
                'Magento_Catalog/template/product/image_with_borders.html',
            'text!Magento_Checkout/template/cart/shipping-estimation.html':
                'Magento_Checkout/template/cart/shipping-estimation.html',
            'text!Magento_Checkout/template/cart/shipping-rates.html':
                'Magento_Checkout/template/cart/shipping-rates.html',
            'text!Magento_Checkout/template/cart/totals.html':
                'Magento_Checkout/template/cart/totals.html',
            'text!Magento_Checkout/template/minicart/item/default.html':
                'Magento_Checkout/template/minicart/item/default.html',
            'text!Magento_Checkout/template/minicart/item/price.html':
                'Magento_Checkout/template/minicart/item/price.html',
            'text!Magento_Checkout/template/minicart/subtotal.html':
                'Magento_Checkout/template/minicart/subtotal.html',
            'text!Magento_GiftMessage/template/gift-message-item-level.html':
                'Magento_GiftMessage/template/gift-message-item-level.html',
            'text!Magento_GiftMessage/template/gift-message.html':
                'Magento_GiftMessage/template/gift-message.html',
            'text!Magento_SalesRule/template/cart/totals/discount.html':
                'Magento_SalesRule/template/cart/totals/discount.html',
            'text!Magento_Tax/template/checkout/cart/totals/grand-total.html':
                'Magento_Tax/template/checkout/cart/totals/grand-total.html',
            'text!Magento_Tax/template/checkout/cart/totals/shipping.html':
                'Magento_Tax/template/checkout/cart/totals/shipping.html',
            'text!Magento_Tax/template/checkout/cart/totals/tax.html':
                'Magento_Tax/template/checkout/cart/totals/tax.html',
            'text!Magento_Tax/template/checkout/minicart/subtotal/totals.html':
                'Magento_Tax/template/checkout/minicart/subtotal/totals.html',
            'text!Magento_Tax/template/checkout/shipping_method/price.html':
                'Magento_Tax/template/checkout/shipping_method/price.html',
            'text!Magento_Tax/template/checkout/summary/subtotal.html':
                'Magento_Tax/template/checkout/summary/subtotal.html',
            'text!Magento_Weee/template/checkout/summary/weee.html':
                'Magento_Weee/template/checkout/summary/weee.html',
            'text!Vertex_Tax/template/checkout/cart/totals/tax-messages.html':
                'Vertex_Tax/template/checkout/cart/totals/tax-messages.html',
            'text!ui/template/form/element/input.html':
                'Magento_Ui/templates/form/element/input.html',
            'text!ui/template/form/element/select.html':
                'Magento_Ui/templates/form/element/select.html',
            'text!ui/template/form/field.html':
                'Magento_Ui/templates/form/field.html',
            'Aheadworks_Giftcard/js/action/apply-giftcard-code':
                'Aheadworks_Giftcard/js/action/apply-giftcard-code',
            'Aheadworks_Giftcard/js/view/payment/giftcard':
                'Aheadworks_Giftcard/js/view/payment/giftcard',
            'Aheadworks_Giftcard/js/view/payment/giftcard-messages':
                'Aheadworks_Giftcard/js/view/payment/giftcard-messages',
            'MageSuite_BusinessCheckout/js/action/set-shipping-information-mixin':
                'MageSuite_BusinessCheckout/js/action/set-shipping-information-mixin',
            'MageSuite_BusinessCheckout/js/shipping-fields-toggle-mixin':
                'MageSuite_BusinessCheckout/js/shipping-fields-toggle-mixin',
            'MageSuite_LoginOrGuestCheckoutStep/js/view/continue-as-guest':
                'MageSuite_LoginOrGuestCheckoutStep/js/view/continue-as-guest',
            'MageSuite_LoginOrGuestCheckoutStep/js/view/login-or-guest':
                'MageSuite_LoginOrGuestCheckoutStep/js/view/login-or-guest',
            'MageSuite_LoginOrGuestCheckoutStep/js/view/shipping-payment-mixin':
                'MageSuite_LoginOrGuestCheckoutStep/js/view/shipping-payment-mixin',
            'Magento_Checkout/js/action/recollect-shipping-rates':
                'Magento_Checkout/js/action/recollect-shipping-rates',
            'Magento_Checkout/js/action/set-billing-address':
                'Magento_Checkout/js/action/set-billing-address',
            'Magento_Checkout/js/action/set-shipping-information':
                'Magento_Checkout/js/action/set-shipping-information',
            'Magento_Checkout/js/before-place-order':
                'Magento_Checkout/js/before-place-order',
            'Magento_Checkout/js/checkout-customizations':
                'Magento_Checkout/js/checkout-customizations',
            'Magento_Checkout/js/checkout-loader':
                'Magento_Checkout/js/checkout-loader',
            'Magento_Checkout/js/model/authentication-messages':
                'Magento_Checkout/js/model/authentication-messages',
            'Magento_Checkout/js/model/billing-address-postcode-validator':
                'Magento_Checkout/js/model/billing-address-postcode-validator',
            'Magento_Checkout/js/model/customer-email-validator':
                'Magento_Checkout/js/model/customer-email-validator',
            'Magento_Checkout/js/model/payment/additional-validators':
                'Magento_Checkout/js/model/payment/additional-validators',
            'Magento_Checkout/js/model/payment/method-group':
                'Magento_Checkout/js/model/payment/method-group',
            'Magento_Checkout/js/model/payment/renderer-list':
                'Magento_Checkout/js/model/payment/renderer-list',
            'Magento_Checkout/js/model/shipping-rate-processor/customer-address':
                'Magento_Checkout/js/model/shipping-rate-processor/customer-address',
            'Magento_Checkout/js/model/shipping-rate-service':
                'Magento_Checkout/js/model/shipping-rate-service',
            'Magento_Checkout/js/model/shipping-save-processor':
                'Magento_Checkout/js/model/shipping-save-processor',
            'Magento_Checkout/js/model/shipping-save-processor/default':
                'Magento_Checkout/js/model/shipping-save-processor/default',
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender':
                'Magento_Checkout/js/model/shipping-save-processor/payload-extender',
            'Magento_Checkout/js/model/sidebar':
                'Magento_Checkout/js/model/sidebar',
            'Magento_Checkout/js/next-button':
                'Magento_Checkout/js/next-button',
            'Magento_Checkout/js/place-order':
                'Magento_Checkout/js/place-order',
            'Magento_Checkout/js/view/authentication':
                'Magento_Checkout/js/view/authentication',
            'Magento_Checkout/js/view/authentication-messages':
                'Magento_Checkout/js/view/authentication-messages',
            'Magento_Checkout/js/view/billing-address':
                'Magento_Checkout/js/view/billing-address',
            'Magento_Checkout/js/view/billing-address/list':
                'Magento_Checkout/js/view/billing-address/list',
            'Magento_Checkout/js/view/estimation':
                'Magento_Checkout/js/view/estimation',
            'Magento_Checkout/js/view/form/element/email':
                'Magento_Checkout/js/view/form/element/email',
            'Magento_Checkout/js/view/missing-house-number-warning':
                'Magento_Checkout/js/view/missing-house-number-warning',
            'Magento_Checkout/js/view/payment':
                'Magento_Checkout/js/view/payment',
            'Magento_Checkout/js/view/payment/email-validator':
                'Magento_Checkout/js/view/payment/email-validator',
            'Magento_Checkout/js/view/payment/list':
                'Magento_Checkout/js/view/payment/list',
            'Magento_Checkout/js/view/progress-bar':
                'Magento_Checkout/js/view/progress-bar',
            'Magento_Checkout/js/view/shipping':
                'Magento_Checkout/js/view/shipping',
            'Magento_Checkout/js/view/shipping-address/list':
                'Magento_Checkout/js/view/shipping-address/list',
            'Magento_Checkout/js/view/shipping-ext':
                'Magento_Checkout/js/view/shipping-ext',
            'Magento_Checkout/js/view/shipping-information':
                'Magento_Checkout/js/view/shipping-information',
            'Magento_Checkout/js/view/shipping-information/list':
                'Magento_Checkout/js/view/shipping-information/list',
            'Magento_Checkout/js/view/sidebar':
                'Magento_Checkout/js/view/sidebar',
            'Magento_Checkout/js/view/summary':
                'Magento_Checkout/js/view/summary',
            'Magento_Checkout/js/view/summary/cart-items':
                'Magento_Checkout/js/view/summary/cart-items',
            'Magento_Checkout/js/view/summary/cart-items-ext':
                'Magento_Checkout/js/view/summary/cart-items-ext',
            'Magento_Checkout/js/view/summary/item/details':
                'Magento_Checkout/js/view/summary/item/details',
            'Magento_Checkout/js/view/summary/item/details/message':
                'Magento_Checkout/js/view/summary/item/details/message',
            'Magento_Checkout/js/view/summary/item/details/subtotal':
                'Magento_Checkout/js/view/summary/item/details/subtotal',
            'Magento_Checkout/js/view/summary/item/details/thumbnail':
                'Magento_Checkout/js/view/summary/item/details/thumbnail',
            'Magento_Checkout/js/view/summary/totals':
                'Magento_Checkout/js/view/summary/totals',
            'Magento_CheckoutAgreements/js/model/agreement-validator':
                'Magento_CheckoutAgreements/js/model/agreement-validator',
            'Magento_CheckoutAgreements/js/model/agreement-validator-ext':
                'Magento_CheckoutAgreements/js/model/agreement-validator-ext',
            'Magento_CheckoutAgreements/js/model/agreements-modal':
                'Magento_CheckoutAgreements/js/model/agreements-modal',
            'Magento_CheckoutAgreements/js/view/agreement-validation':
                'Magento_CheckoutAgreements/js/view/agreement-validation',
            'Magento_CheckoutAgreements/js/view/checkout-agreements':
                'Magento_CheckoutAgreements/js/view/checkout-agreements',
            'Magento_CheckoutAgreements/js/view/checkout-agreements-ext':
                'Magento_CheckoutAgreements/js/view/checkout-agreements-ext',
            'Magento_Customer/js/action/check-email-availability':
                'Magento_Customer/js/action/check-email-availability',
            'Magento_InventoryInStorePickupFrontend/js/model/pickup-locations-service':
                'Magento_InventoryInStorePickupFrontend/js/model/pickup-locations-service',
            'Magento_InventoryInStorePickupFrontend/js/model/resource-url-manager':
                'Magento_InventoryInStorePickupFrontend/js/model/resource-url-manager',
            'Magento_InventoryInStorePickupFrontend/js/model/shipping-rate-processor/store-pickup-address':
                'Magento_InventoryInStorePickupFrontend/js/model/shipping-rate-processor/store-pickup-address',
            'Magento_InventoryInStorePickupFrontend/js/view/form/element/email':
                'Magento_InventoryInStorePickupFrontend/js/view/form/element/email',
            'Magento_InventoryInStorePickupFrontend/js/view/store-pickup':
                'Magento_InventoryInStorePickupFrontend/js/view/store-pickup',
            'Magento_InventoryInStorePickupFrontend/js/view/store-selector':
                'Magento_InventoryInStorePickupFrontend/js/view/store-selector',
            'Magento_OfflinePayments/js/view/payment/offline-payments':
                'Magento_OfflinePayments/js/view/payment/offline-payments',
            'Magento_Payment/js/view/payment/payments':
                'Magento_Payment/js/view/payment/payments',
            'Magento_Paypal/js/view/payment/paypal-payments':
                'Magento_Paypal/js/view/payment/paypal-payments',
            'Magento_PaypalCaptcha/js/view/checkout/paymentCaptcha':
                'Magento_PaypalCaptcha/js/view/checkout/paymentCaptcha',
            'Magento_PaypalCaptcha/js/view/payment/list-mixin':
                'Magento_PaypalCaptcha/js/view/payment/list-mixin',
            'Magento_PaypalReCaptcha/js/paypalReCaptcha':
                'Magento_PaypalReCaptcha/js/paypalReCaptcha',
            'Magento_SalesRule/js/action/cancel-coupon':
                'Magento_SalesRule/js/action/cancel-coupon',
            'Magento_SalesRule/js/action/set-coupon-code':
                'Magento_SalesRule/js/action/set-coupon-code',
            'Magento_SalesRule/js/model/payment/discount-messages':
                'Magento_SalesRule/js/model/payment/discount-messages',
            'Magento_SalesRule/js/view/payment/captcha':
                'Magento_SalesRule/js/view/payment/captcha',
            'Magento_SalesRule/js/view/payment/discount':
                'Magento_SalesRule/js/view/payment/discount',
            'Magento_SalesRule/js/view/payment/discount-messages':
                'Magento_SalesRule/js/view/payment/discount-messages',
            'Magento_Shipping/js/model/config':
                'Magento_Shipping/js/model/config',
            'Magento_Shipping/js/view/checkout/shipping/shipping-policy':
                'Magento_Shipping/js/view/checkout/shipping/shipping-policy',
            'Magento_Tax/js/view/checkout/summary/item/details/subtotal':
                'Magento_Tax/js/view/checkout/summary/item/details/subtotal',
            'Magento_Ui/js/form/components/group':
                'Magento_Ui/js/form/components/group',
            'Magento_Ui/js/form/element/post-code':
                'Magento_Ui/js/form/element/post-code',
            'Magento_Vault/js/view/payment/vault':
                'Magento_Vault/js/view/payment/vault',
            'Magento_Weee/js/view/checkout/summary/item/price/row_excl_tax':
                'Magento_Weee/js/view/checkout/summary/item/price/row_excl_tax',
            'Magento_Weee/js/view/checkout/summary/item/price/row_incl_tax':
                'Magento_Weee/js/view/checkout/summary/item/price/row_incl_tax',
            'Magento_Weee/js/view/checkout/summary/item/price/weee':
                'Magento_Weee/js/view/checkout/summary/item/price/weee',
            'Payone_Core/js/action/addresscheck':
                'Payone_Core/js/action/addresscheck',
            'Payone_Core/js/action/edit-address':
                'Payone_Core/js/action/edit-address',
            'Payone_Core/js/view/billing-address-mixin':
                'Payone_Core/js/view/billing-address-mixin',
            'Payone_Core/js/view/boni-agreement':
                'Payone_Core/js/view/boni-agreement',
            'Payone_Core/js/view/shipping-mixin':
                'Payone_Core/js/view/shipping-mixin',
            'Temando_Shipping/js/model/collection-points':
                'Temando_Shipping/js/model/collection-points',
            'Temando_Shipping/js/model/pickup-locations':
                'Temando_Shipping/js/model/pickup-locations',
            'Temando_Shipping/js/view/checkout/shipping-information/address-renderer/shipping':
                'Temando_Shipping/js/view/checkout/shipping-information/address-renderer/shipping',
            'Vertex_AddressValidation/js/action/set-address-for-validation':
                'Vertex_AddressValidation/js/action/set-address-for-validation',
            'Vertex_AddressValidation/js/model/validation':
                'Vertex_AddressValidation/js/model/validation',
            'Vertex_AddressValidation/js/view/billing-validation-mixin':
                'Vertex_AddressValidation/js/view/billing-validation-mixin',
            'Vertex_AddressValidation/js/view/checkout/shipping/address-validation':
                'Vertex_AddressValidation/js/view/checkout/shipping/address-validation',
            'Vertex_AddressValidation/js/view/shipping-validation-mixin':
                'Vertex_AddressValidation/js/view/shipping-validation-mixin',
            'klarna/core': 'klarna/core',
            'klarna/terms': 'klarna/terms',
            'mage/dropdowns': 'mage/dropdowns',
            'text!Aheadworks_Giftcard/template/payment/giftcard.html':
                'Aheadworks_Giftcard/template/payment/giftcard.html',
            'text!MageSuite_LoginOrGuestCheckoutStep/template/authentication.html':
                'MageSuite_LoginOrGuestCheckoutStep/template/authentication.html',
            'text!MageSuite_LoginOrGuestCheckoutStep/template/continue-as-guest.html':
                'MageSuite_LoginOrGuestCheckoutStep/template/continue-as-guest.html',
            'text!MageSuite_LoginOrGuestCheckoutStep/template/login-or-guest.html':
                'MageSuite_LoginOrGuestCheckoutStep/template/login-or-guest.html',
            'text!Magento_Checkout/template/authentication-tab.html':
                'Magento_Checkout/template/authentication-tab.html',
            'text!Magento_Checkout/template/estimation.html':
                'Magento_Checkout/template/estimation.html',
            'text!Magento_Checkout/template/form/element/email.html':
                'Magento_Checkout/template/form/element/email.html',
            'text!Magento_Checkout/template/next-button.html':
                'Magento_Checkout/template/next-button.html',
            'text!Magento_Checkout/template/onepage.html':
                'Magento_Checkout/template/onepage.html',
            'text!Magento_Checkout/template/payment-methods/list.html':
                'Magento_Checkout/template/payment-methods/list.html',
            'text!Magento_Checkout/template/payment.html':
                'Magento_Checkout/template/payment.html',
            'text!Magento_Checkout/template/payment/before-place-order.html':
                'Magento_Checkout/template/payment/before-place-order.html',
            'text!Magento_Checkout/template/place-order.html':
                'Magento_Checkout/template/place-order.html',
            'text!Magento_Checkout/template/progress-bar.html':
                'Magento_Checkout/template/progress-bar.html',
            'text!Magento_Checkout/template/shipping-address/form.html':
                'Magento_Checkout/template/shipping-address/form.html',
            'text!Magento_Checkout/template/shipping-address/list.html':
                'Magento_Checkout/template/shipping-address/list.html',
            'text!Magento_Checkout/template/shipping-address/shipping-method-item.html':
                'Magento_Checkout/template/shipping-address/shipping-method-item.html',
            'text!Magento_Checkout/template/shipping-address/shipping-method-list.html':
                'Magento_Checkout/template/shipping-address/shipping-method-list.html',
            'text!Magento_Checkout/template/shipping-information.html':
                'Magento_Checkout/template/shipping-information.html',
            'text!Magento_Checkout/template/shipping.html':
                'Magento_Checkout/template/shipping.html',
            'text!Magento_Checkout/template/sidebar.html':
                'Magento_Checkout/template/sidebar.html',
            'text!Magento_Checkout/template/summary.html':
                'Magento_Checkout/template/summary.html',
            'text!Magento_Checkout/template/summary/cart-items.html':
                'Magento_Checkout/template/summary/cart-items.html',
            'text!Magento_Checkout/template/summary/item/details.html':
                'Magento_Checkout/template/summary/item/details.html',
            'text!Magento_Checkout/template/summary/item/details/thumbnail.html':
                'Magento_Checkout/template/summary/item/details/thumbnail.html',
            'text!Magento_Checkout/template/summary/totals.html':
                'Magento_Checkout/template/summary/totals.html',
            'text!Magento_CheckoutAgreements/template/checkout/checkout-agreements.html':
                'Magento_CheckoutAgreements/template/checkout/checkout-agreements.html',
            'text!Magento_InventoryInStorePickupFrontend/template/delivery-method-selector.html':
                'Magento_InventoryInStorePickupFrontend/template/delivery-method-selector.html',
            'text!Magento_InventoryInStorePickupFrontend/template/store-pickup.html':
                'Magento_InventoryInStorePickupFrontend/template/store-pickup.html',
            'text!Magento_SalesRule/template/payment/discount.html':
                'Magento_SalesRule/template/payment/discount.html',
            'text!Magento_Shipping/template/checkout/shipping/shipping-policy.html':
                'Magento_Shipping/template/checkout/shipping/shipping-policy.html',
            'text!Magento_Tax/template/checkout/summary/item/details/subtotal.html':
                'Magento_Tax/template/checkout/summary/item/details/subtotal.html',
            'text!Magento_Weee/template/checkout/summary/item/price/row_incl_tax.html':
                'Magento_Weee/template/checkout/summary/item/price/row_incl_tax.html',
            'text!Payone_Core/template/payment/boni-agreement.html':
                'Payone_Core/template/payment/boni-agreement.html',
            'text!Vertex_AddressValidation/template/checkout/address-messages.html':
                'Vertex_AddressValidation/template/checkout/address-messages.html',
            'text!ui/template/form/element/helper/tooltip.html':
                'Magento_Ui/templates/form/element/helper/tooltip.html',
            'text!ui/template/group/group.html':
                'Magento_Ui/templates/group/group.html',
        },
    },
];
