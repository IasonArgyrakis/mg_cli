<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items;

class NewAction extends \{{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items
{

    public function execute()
    {
        $this->_forward('edit');
    }
}
