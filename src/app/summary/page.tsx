import List from "@/components/list/list";
import { ProjectList, ProjectListItem } from "@/domain/lucy/project_list";

export default function Summary() {
    const list: ProjectList = ProjectListItem[];
    return (
        <div>
            <List list={list}></List>
        </div>
    );
}