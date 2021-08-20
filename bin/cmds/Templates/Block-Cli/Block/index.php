<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */
namespace {{VendorName}}\\{{moduleName}}\Block\Adminhtml;

class {{blockclass}} {{blockextends}}
{
    /**
     * Constructor
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_controller = '{{blockclass}}';
        $this->_headerText = __('Items');
        $this->_addButtonLabel = __('Add New Item');
        parent::_construct();
    }
}
