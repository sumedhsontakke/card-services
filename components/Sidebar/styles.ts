import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: "#f2f2f2" },
  personIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 20,
    borderWidth: 1,
    borderRadius: "100%",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.secondary
  },
  sidebarContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: width * 0.6,
    backgroundColor: "#fff",
    zIndex: 20,
    elevation: 5,
  },
  sidebar: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageText: {
    fontSize: 22,
  },
  logoutButton: {
    position: "absolute",
    bottom: 90,
    width: "100%",
    left: 20,
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 40
  }
});

export default styles;