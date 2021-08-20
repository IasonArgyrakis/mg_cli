<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items;

class Delete extends \{{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items
{

    public function execute()
    {
        $id = $this->getRequest()->getParam('id');
        if ($id) {
            try {
                $model = $this->_objectManager->create('{{VendorName}}\{{moduleName}}\Model\Items');
                $model->load($id);
                $model->delete();
                $this->messageManager->addSuccess(__('You deleted the item.'));
                $this->_redirect('{{VendorName}}_{{moduleName}}/*/');
                return;
            } catch (\Magento\Framework\Exception\LocalizedException $e) {
                $this->messageManager->addError($e->getMessage());
            } catch (\Exception $e) {
                $this->messageManager->addError(
                    __('We can\'t delete item right now. Please review the log and try again.')
                );
                $this->_objectManager->get('Psr\Log\LoggerInterface')->critical($e);
                $this->_redirect('{{VendorName}}_{{moduleName}}/*/edit', ['id' => $this->getRequest()->getParam('id')]);
                return;
            }
        }
        $this->messageManager->addError(__('We can\'t find a item to delete.'));
        $this->_redirect('{{VendorName}}_{{moduleName}}/*/');
    }
}
