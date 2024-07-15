import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import supabase from "../app/lib/supabase"; // Ensure correct path

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        console.log("Error fetching data: ", error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default App;
