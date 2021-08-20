<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Model\Resource;

class {{blockclass}} extends \Magento\Framework\Model\ResourceModel\Db\AbstractDb
{
    /**
     * Model Initialization
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('{{VendorName}}_{{moduleName}}_{{toLowerCase blockclass}}', 'id');
    }
}
