<?php

namespace {{VendorName}}\\{{moduleName}}\Helper;
use \Magento\Framework\App\Helper\AbstractHelper;

class Data extends AbstractHelper
{
    /**
     * @var \Psr\Log\LoggerInterface
     */
    protected $_logger;

    /**
     * @var \Magento\Framework\App\Config\ScopeConfigInterface
     */
    protected $_scopeConfig;

    /**
     * Data constructor.
     * @param Context $context
     */
    public function __construct(
        
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Psr\Log\LoggerInterface $_logger,
        Context $context
    )
    {
        parent::__construct($context);
        $this->_logger = $_logger;
        $this->_scopeConfig = $scopeConfig;
    }



   
    public function getCfg($path = null)
    {
        return $this->_scopeConfig->getValue(
            $path,
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
}