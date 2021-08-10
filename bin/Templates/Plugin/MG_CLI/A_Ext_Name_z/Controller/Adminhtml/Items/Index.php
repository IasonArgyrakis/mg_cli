<?php
/**
 * Copyright © 2015 {{VendorName}}. All rights reserved.
 */

namespace {{VendorName}}\{{pluginName}}\Controller\Adminhtml\Items;

class Index extends \{{VendorName}}\{{pluginName}}\Controller\Adminhtml\Items
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
        $resultPage->setActiveMenu('{{VendorName}}_{{pluginName}}::{{pluginName}}');
        $resultPage->getConfig()->getTitle()->prepend(__('{{VendorName}} Items'));
        $resultPage->addBreadcrumb(__('{{VendorName}}'), __('{{VendorName}}'));
        $resultPage->addBreadcrumb(__('Items'), __('Items'));
        return $resultPage;
    }
}
