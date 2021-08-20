<?php

namespace {{VendorName}}\\{{moduleName}}\Helper;
use \Magento\Framework\App\Helper\AbstractHelper;

class Data extends AbstractHelper
{

    public function __construct(
        \Magento\Framework\Filter\FilterManager $filter,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Psr\Log\LoggerInterface $_logger,
        Context $context
    )
    {
        parent::__construct($context);

        $this->_logger = $_logger;
        $this->_filter = $filter;
        $this->_scopeConfig = $scopeConfig;
    }



       public function getStoreConfig()
       {
               return true;
       }
}