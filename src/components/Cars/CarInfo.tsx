import React, { useRef, useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button } from "@mui/material";
import { ICar } from "../../interfaces";
import defaultCars from "../../assets/defaultCars.jpeg";
import { carService } from "../../services";

interface IProps {
  car: ICar;
}

export const CarInfo: React.FC<IProps> = ({ car }) => {
  const { id, brand, price, year, photo } = car;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const photoInput = useRef<HTMLInputElement>(null);

  const addPhoto = async () => {
    if (photoInput.current) {
        const formData = new FormData();
        const file: Blob = photoInput.current.files[0];
        formData.append('photo', file);
        await carService.addPhoto(id, formData)
        setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Card sx={{ maxWidth: "50vw", margin: "10vh auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={brand}
          sx={{ width: '100%' }}
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
      <Button variant="contained" component="label" sx={{width:'100%'}}>
        Upload Photo
        <input
          type="file"
          hidden
          ref={photoInput}
          accept={'image/jpeg, image/png'}
          onChange={addPhoto}
        />
      </Button>
    </Card>
  );
};
