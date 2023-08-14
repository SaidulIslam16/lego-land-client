
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div className='my-12'>
            <div className='text-4xl text-center font-bold my-10'>
                <h1>Shop by Category</h1>
            </div>
            <Tabs>
                <TabList>
                    {
                        categories.map(category => <Tab key={category._id}>{category.subCategory}</Tab>)
                    }
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