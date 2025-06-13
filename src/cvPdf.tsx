import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import InterRegular from "./fonts/static/Inter_18pt-Regular.ttf";
import InterBold from "./fonts/static/Inter_18pt-Bold.ttf";
import InterItalic from "./fonts/static/Inter_18pt-Italic.ttf";
import InterBoldItalic from "./fonts/static/Inter_18pt-BoldItalic.ttf";
import type { Company } from "./experience";

export interface CvPDFProps {
  data: {
    name: string;
    email: string;
    phone: string;
    school: string;
    educationStartDate: string;
    educationEndDate: string;
    title: string;
    skills: string[];
    company: Company[];
  };
}

Font.register({
  family: "Inter",
  fonts: [
    { src: InterRegular },
    { src: InterBold, fontWeight: "bold" },
    { src: InterItalic, fontStyle: "italic" },
    { src: InterBoldItalic, fontWeight: "bold", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 1.5,
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 4,
  },
  skillBadge: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  divider: {
    height: 1.5,
    backgroundColor: "#444",
    marginVertical: 15,
    width: "100%",
  },
});

export function MyCVPDF({ data }: CvPDFProps) {
  const {
    name,
    email,
    phone,
    school,
    educationStartDate,
    educationEndDate,
    title,
    skills,
    company,
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{name || "John Doe"}</Text>
          <Text>{email || "john@thisisnotanemail.com"}</Text>
          <Text>{phone || "0011223344"}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {(company.length > 0
            ? company
            : [
                {
                  name: "Great-Tech",
                  role: "Front-End Dev",
                  period: "06/06/2025",
                  description:
                    "Managed a portfolio of over 50 client accounts, ensuring high customer satisfaction and retention rates. Acted as the primary point of contact for clients, resolving issues promptly and building strong, trust-based relationships. Collaborated with the sales and design teams to align client expectations with project deliverables. Analyzed client performance metrics to provide actionable insights and tailored recommendations. Upsold additional services, contributing to a 15% increase in revenue within the first year.",
                },
              ]
          ).map((comp, idx) => (
            <View key={idx}>
              <Text style={styles.subHeading}>{comp.name}</Text>
              <Text>{comp.role}</Text>
              <Text>{comp.period}</Text>
              <Text style={styles.paragraph}>{comp.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text>{school || "Michigan University"}</Text>
          <Text>{title || "MBA"}</Text>
          <Text>
            From {educationStartDate || "06/06/2025"} to{" "}
            {educationEndDate || "06/06/2025"}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.row}>
            {(skills.length > 0 ? skills : ["HTML", "CSS", "JavaScript"]).map(
              (skill, index) => (
                <Text key={index} style={styles.skillBadge}>
                  {skill}
                </Text>
              ),
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}
