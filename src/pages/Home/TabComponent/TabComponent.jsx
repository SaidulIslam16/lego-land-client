
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabProductCard from '../TabProductCard/TabProductCard';

const TabComponent = () => {
    const [categories, setCategories] = useState([]);
    const [marvelToys, setMarvelTosys] = useState([]);
    const [architecture, setArchitecture] = useState([]);
    const [car, setCar] = useState([]);
    const [minecraft, setMinecraft] = useState([]);
    const [sports, setSports] = useState([])
    const [city, setCity] = useState([])

    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    // Marvel toys
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/marvel')
            .then(res => res.json())
            .then(data => {
                setMarvelTosys(data);
            })
    }, [])

    // Architechture
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/architecture')
            .then(res => res.json())
            .then(data => {
                setArchitecture(data);
            })
    }, [])

    // Car
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/car')
            .then(res => res.json())
            .then(data => {
                setCar(data);
            })
    }, [])

    // minecraft
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/minecraft')
            .then(res => res.json())
            .then(data => {
                setMinecraft(data);
            })
    }, [])

    // Sports
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/sports')
            .then(res => res.json())
            .then(data => {
                setSports(data);
            })
    }, [])

    // City
    useEffect(() => {
        fetch('https://lego-land-server.vercel.app/toys/categories/city')
            .then(res => res.json())
            .then(data => {
                setCity(data);
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
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            marvelToys.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            car.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            minecraft.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            architecture.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            sports.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 mt-12'>
                        {
                            city.map(toy => <TabProductCard
                                key={toy._d}
                                toy={toy}
                            ></TabProductCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabComponent;