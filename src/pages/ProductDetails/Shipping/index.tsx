import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "../../../components/ListItem";
import { NavigationItem } from "../../../components/NavigationItem";
import { NavigationItemIcon } from "../../../components/NavigationItemIcon";

export const Shipping = () => {
  return (
    <View style={styles.container}>
      <NavigationItemIcon icon="truck-fast-outline" onPress={() => {}}>
        <Text>Frete flat rate grátis em pedidos acima de R$29,00</Text>
        <Text style={{ marginTop: 20 }}>
          Estimado para entrega em 2022/05/10 - 2022/05/18
        </Text>
      </NavigationItemIcon>
      <NavigationItemIcon icon="backup-restore" onPress={() => {}}>
        <Text>Devoluções Gratuitas</Text>
      </NavigationItemIcon>
      <NavigationItemIcon
        icon="shield-check-outline"
        onPress={() => {}}
        contentContainerStyle={{
          flexDirection: "row",
        }}
      >
        <View>
          <Text>Segurança de compras</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: 10,
            }}
          >
            <ListItem text="Pagamento Seguro" style={{ marginRight: 10 }} />
            <ListItem text="Logística segura" style={{ marginRight: 10 }} />
            <ListItem
              text="Atendimento ao Cliente"
              style={{ marginRight: 10 }}
            />
            <ListItem text="Proteção de privacidade" />
          </View>
        </View>
      </NavigationItemIcon>
      <NavigationItem
        text="Descrição"
        extraRightText="#Gráfico #Alongamento médio #Malha fina"
        size="default"
        onPress={() => {}}
      />
      <NavigationItem
        text="Guia de tamanhos"
        size="default"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
});
