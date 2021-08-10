<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{pluginName}}\Controller\Adminhtml\Items;

class NewAction extends \{{VendorName}}\{{pluginName}}\Controller\Adminhtml\Items
{

    public function execute()
    {
        $this->_forward('edit');
    }
}
