import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="w-full bg-green-waves mt-12">
      <p className="text-lg text-center">
        Copyright <FontAwesomeIcon icon={faCopyright} /> 2020
      </p>
    </div>
  );
}
