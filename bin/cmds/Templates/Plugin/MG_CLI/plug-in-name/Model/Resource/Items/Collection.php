<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Model\Resource\Items;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    /**
     * Define resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('{{VendorName}}\{{moduleName}}\Model\Items', '{{VendorName}}\{{moduleName}}\Model\Resource\Items');
    }
}
