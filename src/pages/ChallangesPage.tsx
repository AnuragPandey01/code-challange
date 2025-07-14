import appwriteConf from "@/conf/appwrite_conf";
import { databases } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Challange } from "@/types/api/Challange";
import { Badge } from "@/components/ui/badge";



function BrowseChallangePage() {

  const [challanges, setChallanges] = useState<Challange[]>([]);

  useEffect(() => {
    const fetchChallanges = async () => {
      const challanges = await databases.listDocuments(
        appwriteConf.databaseId,
        appwriteConf.challangeCollectionId,
      );
      setChallanges(challanges.documents as Challange[]);
      console.log(challanges.documents as Challange[]);
    };
    fetchChallanges();
  }, []);

  return (
    <div className="w-full">
      {/* <h1 className="text-2xl font-semibold">Challanges</h1> */}
      <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-muted sticky top-0">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead className="text-center">Submissions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {challanges.map((challange) => (
              <TableRow className="hover:bg-muted/50 cursor-pointer">
                <TableCell>{challange.$id.slice(0, 6)}</TableCell>
                <TableCell className="font-medium">{challange.title}</TableCell>
                <TableCell className="flex max-w-[200px] flex-wrap gap-2">
                  {challange.tags.map((tag) => (
                    <Badge key={tag.$id}>{tag.name}</Badge>
                  ))}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      challange.difficulty === "easy"
                        ? "success"
                        : challange.difficulty === "medium"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {challange.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  {challange.submissions.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default BrowseChallangePage;
