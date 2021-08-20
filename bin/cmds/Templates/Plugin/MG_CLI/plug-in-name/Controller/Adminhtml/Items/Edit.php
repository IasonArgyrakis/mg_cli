<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items;

class Edit extends \{{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items
{

    public function execute()
    {
        $id = $this->getRequest()->getParam('id');
        $model = $this->_objectManager->create('{{VendorName}}\{{moduleName}}\Model\Items');

        if ($id) {
            $model->load($id);
            if (!$model->getId()) {
                $this->messageManager->addError(__('This item no longer exists.'));
                $this->_redirect('{{VendorName}}_{{moduleName}}/*');
                return;
            }
        }
        // set entered data if was error when we do save
        $data = $this->_objectManager->get('Magento\Backend\Model\Session')->getPageData(true);
        if (!empty($data)) {
            $model->addData($data);
        }
        $this->_coreRegistry->register('current_{{VendorName}}_{{moduleName}}_items', $model);
        $this->_initAction();
        $this->_view->getLayout()->getBlock('items_items_edit');
        $this->_view->renderLayout();
    }
}
