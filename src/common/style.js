import color from "./color";
export default {
  container: {
    flex: 1,
    backgroundColor: color.color_bg,
  },
  crypListItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: color.color_white,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 5,
    alignItems: "center",
    marginHorizontal: 10,
    borderLeftColor: color.color_grey,
    borderLeftWidth: 10,
  },
  itemImg: { width: 55, height: 55 },
  itemImgVIew: { width: "20%" },
  itemDataView: { width: "80%", marginLeft: 5 },
  itemtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  dataRow: {
    flexDirection: "row",
    paddingVertical: 2,
  },
  label: {
    color: "#555",
  },
  value: {
    fontWeight: "600",
    marginLeft: 10,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
  },
  detailContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: color.color_black,
    marginBottom: 10,
  },
  symbol: {
    fontSize: 18,
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: color.color_black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    // color: "#333",
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
  },
};
