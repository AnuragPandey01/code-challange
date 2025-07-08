import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import appwriteConf from "@/conf/appwrite_conf";
import { databases } from "@/lib/appwrite";
import type { Language } from "@/types/api/Language";

function ChallangePage() {
  const [langs, setLangs] = useState<Language[]>([]);
  const [selectedLang, setSelectedLang] = useState<Language>();
  const [code, setCode] = useState("--hello");
  const [theme, setTheme] = useState("vs-dark");

  useEffect(() => {
    setCode(selectedLang?.hello_world || "");
  }, [selectedLang]);

  useEffect(() => {
    const getLangs = async () => {
      try {
        const res = await databases.listDocuments<Language>(
          appwriteConf.databaseId,
          appwriteConf.languageCollectionId,
        );
        console.log(res);
        setLangs(res.documents);
      } catch (e) {
        console.error(e);
      }
    };

    getLangs();
  }, []);

  return (
    <div className="min-h-svh w-full">
      <Tabs defaultValue="challange">
        <TabsList>
          <TabsTrigger value="challange">Challange</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
          <TabsTrigger value="editorial">Editorial</TabsTrigger>
        </TabsList>
        <TabsContent className="flex flex-col gap-5" value="challange">
          <div className="flex flex-col">
            <div className="flex justify-end gap-2 bg-accent p-2">
              <Select
                onValueChange={(theme) => {
                  setTheme(theme);
                }}
                value={theme}
              >
                <SelectTrigger>
                  <SelectValue defaultValue="vs-dark" placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vs-dark">Dark</SelectItem>
                  <SelectItem value="vs">Light</SelectItem>
                  <SelectItem value="hc-black">High contrast Dark</SelectItem>
                </SelectContent>
              </Select>
              <Select
                onValueChange={(id) => {
                  const lang = langs.find((it) => it.judge0_id === id);
                  setSelectedLang(lang);
                }}
                value={selectedLang?.judge0_id || ""}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Languages" />
                </SelectTrigger>
                <SelectContent>
                  {langs.map((lang) => (
                    <SelectItem key={lang.judge0_id} value={lang.judge0_id}>
                      {lang.judge0_lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Editor
              height="60vh"
              language={selectedLang?.monaco_lang || "plaintext"}
              onChange={(value) => setCode(value || "")}
              theme={theme}
              value={code}
            />
          </div>
          <div className="flex place-content-between">
            <Button className="text-muted-foreground" variant="outline">
              Upload code as file
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">Run code</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="submissions">submissions</TabsContent>
      </Tabs>
    </div>
  );
}

export default ChallangePage;
