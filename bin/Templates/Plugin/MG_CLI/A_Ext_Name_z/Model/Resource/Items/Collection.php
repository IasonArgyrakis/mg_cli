<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{pluginName}}\Model\Resource\Items;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    /**
     * Define resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('{{VendorName}}\{{pluginName}}\Model\Items', '{{VendorName}}\{{pluginName}}\Model\Resource\Items');
    }
}
