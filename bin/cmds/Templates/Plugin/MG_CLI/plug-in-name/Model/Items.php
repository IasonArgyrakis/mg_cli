<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Model;

class Items extends \Magento\Framework\Model\AbstractModel
{
    /**
     * Constructor
     *
     * @return void
     */
    protected function _construct()
    {
        parent::_construct();
        $this->_init('{{VendorName}}\{{moduleName}}\Model\Resource\Items');
    }
}
