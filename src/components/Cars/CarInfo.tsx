import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  Switch,
} from "@mui/material";
import { ICar } from "../../interfaces";
import defaultCars from "../../assets/defaultCars.jpeg";
import { carService } from "../../services";

interface IProps {
  car: ICar;
}

const pureFunction = (a: number, b: number): number => {
  return a + b;
};

const superObj = {
  side: "a",
};

export const CarInfo: React.FC<IProps> = ({ car }) => {
  console.log(`render ${pureFunction(7, 3)}`);

  const myInputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    superObj.side = "b";
    console.log(superObj.side);

    return () => {
      superObj.side = "a";
      console.log(superObj.side);
    };
  }, [isActive]);
  
  useEffect(() => {
    console.log('rerender');
  }, [inputText]);

  const { id, brand, price, year, photo } = car;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const photoInput = useRef<HTMLInputElement>(null);

  const addPhoto = async () => {
    if (photoInput.current) {
      const formData = new FormData();
      const file: Blob = photoInput.current.files[0];
      formData.append("photo", file);
      await carService.addPhoto(id, formData);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card sx={{ maxWidth: "50vw", margin: "10vh auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={brand}
            sx={{ width: "100%" }}
            image={selectedImage || photo || defaultCars}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Brand: {brand}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Id: {id}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Year: {year}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Price: {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button variant="contained" component="label" sx={{ width: "100%" }}>
          Upload Photo
          <input
            type="file"
            hidden
            ref={photoInput}
            accept={"image/jpeg, image/png"}
            onChange={addPhoto}
          />
        </Button>
      </Card>

      <input
      ref={myInputRef}
        type="text"
        placeholder="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {isActive && <Typography>Is active</Typography>}

      <Switch
        value={isActive}
        onChange={() => setIsActive((prev) => !prev)}
      ></Switch>
    
    </div>
  );
};
