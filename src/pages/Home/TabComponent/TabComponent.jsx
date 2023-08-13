
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabComponent = () => {
    return (
        <div className='my-12'>
            <div className='text-4xl text-center font-bold my-10'>
                <h1>Shop by Category</h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>
                <TabPanel>
                    <p>Content for Tab 1</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for Tab 2</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for Tab 3</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabComponent;