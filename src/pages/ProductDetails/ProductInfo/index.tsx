import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ReviewStars } from "../../../components/ReviewStars";
import { SizeTag } from "../../../components/SizeTag";
import { ProductSize } from "../../../models/Product";

const sheinLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8hISEAAAAbGxseHh4LCwsVFRVvb29GRkbMzMzZ2dnl5eUZGRmxsbGZmZno6OhXV1diYmIRERG3t7c7OzuEhISlpaXt7e339/fQ0NCVlZW0tLS/v79BQUGNjY1nZ2d4eHhSUlI0NDQoKCifn59dXV09PT3daOl6AAADs0lEQVR4nO3Z2WKqOhiGYfIzSB2qBaugtlpbe/+XuJm0JIBLS2T34H3OGtPAhzETjgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgsZJ0F8e7dP2/3cB8/sjWJ++fcraPWz7fj3Kbetn6pSh71SqOujxr1XZFe/utdg0ZN667Les1P7jTei++p84CkWezxliCjJzqZfOizH/TKgZR0Er2WrVZ2Z52nYnIzrzuc1nvqU+6zJMESuOJb7Q5liL7S71sXpS5oVZReapVMNKqzYr/9Y2ESlZmQj+v1zfhkzRvyDN6zEAJleh93k7CRKqbcn0RP/DKgD2/Q2nQ/rUzoTLqWUn47lffWrjZxquDZIHdxm/+3oTZsGzQb7IzofLfEtsJpfrW0urvOPKjxrh9X0JP/eui3QlV4NUmLBsJq3brjYyac+KACbUeZCNhWrTrLa/XGjJh1p8us4bFhMfrtQZNmEU6f/CgXtpi4IRKDmWZxZFGyexapaETKlkUZTZnCyWfVzJWCbWl1/qRCVV0zGcNSzP+5Qcuh66myoTe52nx48PtSqhUvV4uTPX2/p1QTaOJrVXb7qflKAuZttUpEypvWlME7Eg4NZj3eEPCYoq2k9BZSW0xGcmxscK/JGxx27r0joS1BiRe2UnopEE9oythx5pmiITed31IXXp2EjrOV1TfQU3F3ASfe6lf153Qayy8b04Yvae1x+21Pp/f2Z2kFlK2+qfVSBPOVj/K30j7WDqfGBK9vSsJX52JP73eA34rifdyeXwyaUk4xGyRJXSSY/SQhMWVP6uM04VWPtyMHxV74A95VMJs81Sd2Ii2wRg6oTOShyWsOp/ST4UGT+hs5GEJnX0x4OiHQsMndLY/Q2r/hPqZxeFvJMz2da6thDsJayNn8jd6aX6BaWAn4Zdky5jReTk6Obp/YaQpJEvfRsLX8uZFXjaz+GtRdY1AO96+96zN+14ajodfJHSck/RPeLqMWdP8vPS8mtC/wrtPE11TdNuJsJmwfP79En6ZR/rFd9D3RLjhxjPvRsL8N9S3l64/xFgGZjuovifC9hJm42Djed8tXYhE55E5P9wfJWaVsRRdzUiYlwV6Qnfa6KAF33z3lBea757yDYv55iK/toUZfx2/hud9Tvjc8qZyfAwzb4d62bws0180hB3e9BuPl3nhtzbnrt83ueb+e21tbzEZp+OHvof9raT3G1IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArf4D7Us5wA+IQtIAAAAASUVORK5CYII=";

type Sizes = ProductSize & {
  measurements: {
    name: string;
    value: string;
  }[];
};

type Props = {
  title: string;
  price: number;
  numberOfReviews: number;
  note: number;
  sizes: Sizes[];
};

export const ProductInfo = ({
  title,
  price,
  numberOfReviews,
  note,
  sizes,
}: Props) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const onSelectSize = (index: number) => {
    setSelectedSizeIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowBetween}>
        <Text>{title}</Text>
        <Ionicons name="ios-share-outline" style={styles.icons} />
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.price}>{`R$${price}`}</Text>

        <View style={styles.row}>
          <ReviewStars note={3} />
          <Text>({numberOfReviews})</Text>
          <Ionicons name="chevron-forward" />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.installments}>
          {`6x de R${(price / 6).toFixed(2)}`}
        </Text>
        <Image source={{ uri: sheinLogo }} style={styles.logo} />
        <Ionicons name="information-circle-outline" style={styles.icons} />
      </View>
      <Text style={styles.sizesText}>Tamanho (BR)</Text>
      <View style={styles.sizesWrapper}>
        {sizes.map((size, index) => (
          <SizeTag
            {...size}
            key={index}
            style={{ marginRight: 10, marginBottom: 10 }}
            selected={selectedSizeIndex === index}
            onPress={() => onSelectSize(index)}
          />
        ))}
      </View>
      <View style={styles.specifications}>
        <Text style={styles.grayText}>Medições do produto</Text>
        <View
          style={[
            styles.row,
            {
              borderWidth: 1,
              borderColor: "transparent",
              borderBottomColor: "#cecdcd",
              marginBottom: 10,
              paddingBottom: 10,
            },
          ]}
        >
          {sizes[selectedSizeIndex].measurements.map((item, index) => (
            <View style={styles.measure} key={index}>
              <Text style={styles.measureName}>{item.name}: </Text>
              <Text style={styles.measureValue}>{item.value}, </Text>
            </View>
          ))}
        </View>

        <View style={styles.rowAlignEnd}>
          <Text style={styles.grayText}>Veja mais informações de tamanho</Text>
          <Ionicons name="chevron-forward" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  installments: {},
  logo: {
    width: 100,
    height: 25,
  },
  icons: {
    fontSize: 22,
  },
  sizesText: {
    marginTop: 20,
    marginBottom: 10,
  },
  sizesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  specifications: {
    padding: 10,
    backgroundColor: "#fbfbfb",
  },
  measure: {
    flexDirection: "row",
  },
  rowAlignEnd: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  measureName: {
    fontWeight: "300",
  },
  measureValue: {
    color: "#959595",
  },
  grayText: {
    color: "#959595",
  },
});
