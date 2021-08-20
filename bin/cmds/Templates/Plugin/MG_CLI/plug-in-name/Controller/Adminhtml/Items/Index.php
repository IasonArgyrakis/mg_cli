<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items;

class Index extends \{{VendorName}}\{{moduleName}}\Controller\Adminhtml\Items
{
    /**
     * Items list.
     *
     * @return \Magento\Backend\Model\View\Result\Page
     */
    public function execute()
    {
        /** @var \Magento\Backend\Model\View\Result\Page $resultPage */
        $resultPage = $this->resultPageFactory->create();
        $resultPage->setActiveMenu('{{VendorName}}_{{moduleName}}::{{moduleName}}');
        $resultPage->getConfig()->getTitle()->prepend(__('{{VendorName}} Items'));
        $resultPage->addBreadcrumb(__('{{VendorName}}'), __('{{VendorName}}'));
        $resultPage->addBreadcrumb(__('Items'), __('Items'));
        return $resultPage;
    }
}
